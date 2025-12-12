import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { CertificadoCarousel } from "@/components/CertificadoCarousel";
import { Loader2 } from "lucide-react";
import maitePlaceholder from "@/assets/mait.jpeg";
import manuelaPlaceholder from "@/assets/manuel.jpeg";

interface Crianca {
  id: string;
  nome: string;
  resumo: string | null;
  foto_url: string | null;
}

interface Certificacao {
  id: string;
  id_crianca: string;
  nome_certificado: string;
  descricao: string | null;
  data: string | null;
  foto_url: string | null;
}

const placeholderImages: Record<string, string> = {
  Maitê: maitePlaceholder,
  Manuela: manuelaPlaceholder,
};

function getPlaceholderImage(nome: string): string {
  if (nome.includes("Maitê")) return placeholderImages["Maitê"];
  if (nome.includes("Manuela")) return placeholderImages["Manuela"];
  return maitePlaceholder;
}

const Sobre = () => {
  const [criancas, setCriancas] = useState<Crianca[]>([]);
  const [certificacoes, setCertificacoes] = useState<Certificacao[]>([]);
  const [loading, setLoading] = useState(true);

  // Lê o ID da atleta na URL (ex: /sobre?id=1)
  const selectedId = new URLSearchParams(window.location.search).get("id");

  // 🔥 Sempre que trocar de atleta → sobe para o topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedId]);

  // Buscar dados do PHP
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [criancasRes, certificacoesRes] = await Promise.all([
          fetch("https://para24h.com/get-criancas.php"),
          fetch("https://para24h.com/get-certificacoes.php"),
        ]);

        setCriancas(await criancasRes.json());
        setCertificacoes(await certificacoesRes.json());
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getCertificacoesByCrianca = (criancaId: string) =>
    certificacoes.filter(
      (cert) => String(cert.id_crianca) === String(criancaId)
    );

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  // 🔥 Se tiver ID → mostra apenas a atleta escolhida
  const atletasFiltradas =
    selectedId ? criancas.filter((c) => String(c.id) === selectedId) : criancas;

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-gradient-hero py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Sobre <span className="text-gradient-gold">Nós</span>
          </h1>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {atletasFiltradas.map((crianca) => {
            const certsDaCrianca = getCertificacoesByCrianca(crianca.id);

            return (
              <div
                key={crianca.id}
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-10
                  lg:gap-16
                  items-center
                "
              >
                {/* FOTO */}
                <img
                  src={crianca.foto_url || getPlaceholderImage(crianca.nome)}
                  alt={crianca.nome}
                  className="
                    w-full
                    max-h-[65dvh]
                    sm:max-h-none
                    aspect-[4/5]
                    object-cover
                    rounded-xl
                  "
                />

                {/* TEXTO + CERTIFICADOS */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {crianca.nome}
                  </h2>

                  <p className="text-muted-foreground">
                    {crianca.resumo ||
                      "Uma jovem atleta dedicada e apaixonada pelo esporte."}
                  </p>

                  {certsDaCrianca.length > 0 ? (
                    <CertificadoCarousel certificacoes={certsDaCrianca} />
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      Nenhuma certificação cadastrada.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
