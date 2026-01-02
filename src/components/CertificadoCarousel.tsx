import { useState } from "react";
import { ChevronLeft, ChevronRight, Award, Calendar, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Certificacao {
  id: string;
  nome_certificado: string;
  descricao: string | null;
  data: string | null;
  foto_url: string | null;
}

interface CertificadoCarouselProps {
  certificacoes: Certificacao[];
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// 🔗 Para imagens vindas do banco/Hostinger
function getPublicImageUrl(path: string | null) {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `https://para24h.com${path}`;
}

export function CertificadoCarousel({ certificacoes }: CertificadoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificacao | null>(null);

  if (!certificacoes.length) {
    return <p className="text-muted-foreground italic">Nenhuma certificação cadastrada.</p>;
  }

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? certificacoes.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === certificacoes.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* ================= CAROUSEL ================= */}
      <div className="relative w-full">
        <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificacoes.map((cert) => {
              const imageUrl = getPublicImageUrl(cert.foto_url);

              return (
                <div
                  key={cert.id}
                  className="min-w-full p-4 sm:p-6 cursor-pointer"
                  onClick={() => {
                    setSelectedCert(cert);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* IMAGEM */}
                    <div
                      className="
                      w-full sm:w-48
                      h-52 sm:h-48
                      rounded-lg overflow-hidden
                      bg-muted flex-shrink-0 border
                    "
                    >
                      {imageUrl ? (
                        <img src={imageUrl} alt={cert.nome_certificado} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <Award className="w-14 h-14 opacity-40" />
                        </div>
                      )}
                    </div>

                    {/* TEXTO DO CERTIFICADO */}
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                        {cert.nome_certificado}
                      </h4>

                      {cert.descricao && (
                        <p
                          className="
                            text-base sm:text-lg md:text-xl
                            font-semibold
                            text-slate-800
                            leading-relaxed
                            mb-3
                          "
                        >
                          {cert.descricao}
                        </p>
                      )}

                      {cert.data && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {formatDate(cert.data)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTÕES ================= */}
        {certificacoes.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/90 border rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/90 border rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* ================= INDICADORES ================= */}
        <div className="flex justify-center gap-2 mt-4">
          {certificacoes.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2 rounded-full transition-all",
                i === currentIndex ? "w-6 bg-primary" : "w-2 bg-muted"
              )}
            />
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {isModalOpen && selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90dvh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-3 right-3 z-10" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>

            {selectedCert.foto_url && (
              <img
                src={getPublicImageUrl(selectedCert.foto_url)!}
                className="w-full max-h-[55dvh] object-contain bg-black"
              />
            )}

            <div className="p-4 sm:p-6 overflow-y-auto">
              <h3 className="text-xl sm:text-3xl font-bold mb-3 text-slate-900 leading-tight">
                {selectedCert.nome_certificado}
              </h3>

              {selectedCert.descricao && (
                <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 leading-relaxed">
                  {selectedCert.descricao}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
