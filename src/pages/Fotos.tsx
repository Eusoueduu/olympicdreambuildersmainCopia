import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Calendar, Loader2, ChevronLeft, ChevronRight } from "lucide-react";

interface Foto {
  id: string;
  titulo: string;
  descricao: string | null;
  foto_url: string;
  data: string | null;
}

interface Video {
  id: string;
  titulo: string;
  youtube_url: string;
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

const API_BASE = "https://para24h.com";

const Fotos = () => {
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fotosRes = await fetch(`${API_BASE}/get-fotos.php`);
        const videosRes = await fetch(`${API_BASE}/get-videos.php`);

        if (!fotosRes.ok) throw new Error("Erro ao carregar fotos");
        if (!videosRes.ok) throw new Error("Erro ao carregar vídeos");

        const fotosData = await fotosRes.json();
        const videosData = await videosRes.json();

        // 🔒 Garantia de array
        setFotos(Array.isArray(fotosData) ? fotosData : []);
        setVideos(Array.isArray(videosData) ? videosData : []);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar conteúdo.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const next = () => {
    if (fotos.length === 0) return;
    setIndex((prev) => (prev + 1) % fotos.length);
  };

  const prev = () => {
    if (fotos.length === 0) return;
    setIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center text-red-500">
          {error}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* =================== FOTOS =================== */}
      <section className="py-12">
        <h1 className="text-3xl font-bold text-center mb-8">
          Galeria de Fotos
        </h1>

        {fotos.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhuma foto cadastrada.
          </p>
        ) : (
          <div className="relative max-w-4xl mx-auto">
            <img
              src={
                fotos[index].foto_url.startsWith("http")
                  ? fotos[index].foto_url
                  : `${API_BASE}${fotos[index].foto_url}`
              }
              alt={fotos[index].titulo}
              className="w-full h-[580px] object-cover rounded-xl shadow"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/800x400?text=Imagem+indisponível";
              }}
            />

            {/* CONTROLES */}
            {fotos.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={next}
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow"
                >
                  <ChevronRight />
                </button>
              </>
            )}

            <p className="text-center mt-3 text-muted-foreground">
              {fotos[index].titulo} — {formatDate(fotos[index].data)}
            </p>
          </div>
        )}
      </section>

      {/* =================== VÍDEOS =================== */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Vídeos da Nossa Jornada
        </h2>

        {videos.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhum vídeo cadastrado.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
            {videos.map((video) => {
              const videoId =
                video.youtube_url.includes("watch?v=")
                  ? video.youtube_url.split("watch?v=")[1]
                  : video.youtube_url.split("/").pop();

              return (
                <div
                  key={video.id}
                  className="rounded-xl overflow-hidden shadow bg-white"
                >
                  <iframe
                    className="w-full h-56"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="p-3 text-center font-medium">
                    {video.titulo}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Fotos;
