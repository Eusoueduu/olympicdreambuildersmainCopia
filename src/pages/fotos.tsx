import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";

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

interface NewsItem {
  id: string;
  title: string;
  url: string;
  source: string | null;
  thumbnail_url: string | null;
  published_at: string | null;
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

/* =================== SAFE PARSE =================== */
function safeJsonParse<T>(value: any, fallback: T): T {
  try {
    if (Array.isArray(value)) return value as T;
    if (typeof value === "string") return JSON.parse(value) as T;
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

/* =================== NORMALIZA URL (thumb/foto) =================== */
function toAbsoluteUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${API_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

const Fotos = () => {
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);

  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // ✅ modal fullscreen
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const [fotosRes, videosRes, newsRes] = await Promise.all([
          fetch(`${API_BASE}/get-fotos.php`),
          fetch(`${API_BASE}/get-videos.php`),
          fetch(`${API_BASE}/get-news.php`),
        ]);

        if (!fotosRes.ok) throw new Error("Erro ao carregar fotos");
        if (!videosRes.ok) throw new Error("Erro ao carregar vídeos");
        if (!newsRes.ok) throw new Error("Erro ao carregar notícias");

        const [fotosRaw, videosRaw, newsRaw] = await Promise.all([
          fotosRes.text(),
          videosRes.text(),
          newsRes.text(),
        ]);

        const fotosData = safeJsonParse<any>(fotosRaw, []);
        const videosData = safeJsonParse<any>(videosRaw, []);
        const newsData = safeJsonParse<any>(newsRaw, []);

        if (!isMounted) return;

        setFotos(Array.isArray(fotosData) ? fotosData : []);
        setVideos(Array.isArray(videosData) ? videosData : []);
        setNews(Array.isArray(newsData) ? newsData : []);
      } catch (err) {
        console.error(err);
        if (!isMounted) return;
        setError("Erro ao carregar conteúdo.");
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
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
        <h1 className="text-3xl font-bold text-center mb-8">Galeria de Fotos</h1>

        {fotos.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhuma foto cadastrada.
          </p>
        ) : (
          <div className="relative max-w-5xl mx-auto px-4">
            {/* ✅ agora não corta: object-contain + altura responsiva */}
            <div className="rounded-xl shadow bg-black overflow-hidden">
              <img
                src={toAbsoluteUrl(fotos[index].foto_url) || ""}
                alt={fotos[index].titulo}
                className="w-full h-[70vh] object-contain cursor-zoom-in"
                onClick={() => setOpen(true)}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/1200x675?text=Imagem+indispon%C3%ADvel";
                }}
              />
            </div>

            {fotos.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={next}
                  className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/80 w-10 h-10 rounded-full flex items-center justify-center shadow"
                  aria-label="Próxima foto"
                >
                  <ChevronRight />
                </button>
              </>
            )}

            <p className="text-center mt-3 text-muted-foreground">
              {fotos[index].titulo} {fotos[index].data ? "—" : ""}{" "}
              {formatDate(fotos[index].data)}
            </p>
          </div>
        )}

        {/* ✅ MODAL FULLSCREEN: mostra a foto inteira */}
        {open && fotos.length > 0 && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            {/* Fechar */}
            <button
              className="absolute top-4 right-4 text-white text-3xl leading-none"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Voltar */}
            {fotos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 md:left-6 text-white text-5xl leading-none"
                aria-label="Foto anterior"
              >
                ‹
              </button>
            )}

            <img
              src={toAbsoluteUrl(fotos[index].foto_url) || ""}
              alt={fotos[index].titulo}
              className="max-w-[95vw] max-h-[92vh] object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/1200x675?text=Imagem+indispon%C3%ADvel";
              }}
            />

            {/* Próxima */}
            {fotos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 md:right-6 text-white text-5xl leading-none"
                aria-label="Próxima foto"
              >
                ›
              </button>
            )}

            {/* Legenda */}
            <div className="absolute bottom-4 left-0 right-0 text-center px-4">
              <p className="text-white/90 text-sm">
                {fotos[index].titulo} {fotos[index].data ? "—" : ""}{" "}
                {formatDate(fotos[index].data)}
              </p>
            </div>
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
              const raw = video.youtube_url || "";
              const videoId = raw.includes("watch?v=")
                ? raw.split("watch?v=")[1]?.split("&")[0]
                : raw.split("/").pop()?.split("?")[0];

              return (
                <div
                  key={video.id}
                  className="rounded-xl overflow-hidden shadow bg-white"
                >
                  <iframe
                    className="w-full h-56"
                    src={`https://www.youtube.com/embed/${videoId}`}
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

      {/* =================== NOTÍCIAS (VINDO DO BANCO) =================== */}
      <section className="py-16 bg-background">
        <h2 className="text-3xl font-bold text-center mb-10">
          Notícias em Destaque
        </h2>

        {news.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhuma notícia cadastrada.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
            {news.map((n) => {
              const thumb = toAbsoluteUrl(n.thumbnail_url);

              return (
                <a
                  key={String(n.id)}
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl overflow-hidden border bg-card shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-full h-56 bg-muted overflow-hidden">
                    <img
                      src={
                        thumb ||
                        "https://via.placeholder.com/1200x675?text=Not%C3%ADcia"
                      }
                      alt={n.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/1200x675?text=Not%C3%ADcia";
                      }}
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs text-muted-foreground">
                        {n.source || "Notícia"}
                      </p>
                      {n.published_at && (
                        <p className="text-xs text-muted-foreground">
                          {formatDate(n.published_at)}
                        </p>
                      )}
                    </div>

                    <h3 className="font-semibold text-lg leading-snug mt-2">
                      {n.title}
                    </h3>

                    <p className="text-sm text-primary mt-2">Ver notícia →</p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Fotos;
