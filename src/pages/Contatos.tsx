import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Instagram, Facebook, Phone, Loader2, Mail, MapPin } from "lucide-react";

interface Contato {
  id: string;
  instagram: string | null;
  facebook: string | null;
  telefone: string | null;
}

const Contatos = () => {
  const [contato, setContato] = useState<Contato | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContato() {
      try {
        const { data, error } = await supabase
          .from("contatos")
          .select("*")
          .limit(1)
          .maybeSingle();

        if (data) setContato(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchContato();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-6 animate-fade-up">
            Fale Conosco
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
            Entre em <span className="text-gradient-gold">Contato</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Conecte-se conosco através das nossas redes sociais ou entre em contato diretamente.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Instagram */}
            <a
  href="https://www.instagram.com/comunidade_olimpica/"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-up text-center"
>
  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
    <Instagram className="w-8 h-8 text-primary-foreground" />
  </div>
  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
    Instagram
  </h3>
  <p className="text-primary font-medium">
    @comunidade_olimpica
  </p>
</a>


            {/* Facebook */}
            {/* E-mail */}
<a
  href="mailto:bentesmaite@gmail.com"
  className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-up animation-delay-100 text-center"
>
  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
    <Mail className="w-8 h-8 text-primary-foreground" />
  </div>

  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
    E-mail
  </h3>

  <p className="text-primary font-medium break-all">
    bentesmaite@gmail.com
  </p>
</a>



            {/* Phone */}
            <a
  href="tel:+5591989716273"
  className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-up animation-delay-200 text-center sm:col-span-2 lg:col-span-1"
>
  <div className="w-16 h-16 mx-auto rounded-2xl bg-olympic-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
    <Phone className="w-8 h-8 text-primary-foreground" />
  </div>
  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
    Telefone
  </h3>
  <p className="text-primary font-medium">
    (91) 998971-6273
  </p>
</a>

          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 animate-fade-up">
              Vamos Conversar!
            </h2>
            <p className="text-muted-foreground leading-relaxed animate-fade-up animation-delay-100">
              Ficou interessado em saber mais sobre a Comunidade Olímpica? Quer apoiar nossas atletas ou tem alguma dúvida? Entre em contato conosco através das nossas redes sociais ou telefone. Teremos prazer em conversar com você!
            </p>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm animate-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Localização
                  </h3>
                  <p className="text-muted-foreground text-sm">Brasil</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Atua de forma local, com foco no desenvolvimento acadêmico de jovens talentos. Para informações sobre programas de preparação, competições e parcerias, entre em contato através dos nossos canais de comunicação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatos;
