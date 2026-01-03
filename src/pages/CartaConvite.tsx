import { Layout } from "@/components/Layout";
import cartaConviteImg from "@/assets/cartaconvite.jpg"; // Imagem que você está usando

const CartaConvite = () => {
  return (
    <Layout>
      {/* HERO – TOPO */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-6 animate-fade-up">
            Apresentação Oficial
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
            Carta <span className="text-gradient-gold">Convite</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Um convite especial para fazer parte da Comunidade Olímpica Acadêmica
            e caminhar conosco na formação esportiva e humana das nossas atletas.
          </p>
        </div>
      </section>

      {/* IMAGEM DA CARTA CONVITE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-10">
            <div
              className="w-full
                aspect-[16/9]
                rounded-xl
                overflow-hidden
                shadow-xl
                bg-black
                flex items-center justify-center"
            >
              <img
                src={cartaConviteImg}
                alt="Carta Convite em Produção"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            {/* TEXTO */}
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Um Convite Para Crescer Conosco
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                A Comunidade Olímpica Acadêmica oferece um ambiente acolhedor e inspirador, dedicado às principais olimpíadas estudantis: OBA, OBMEP, Canguru, OIMSF, GOA e Matific.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Cada estudante é única, cada conquista é celebrada e cada desafio é uma oportunidade de aprendizado.
Entre em contato para mais informações e participe desta comunidade.
              </p>

               
            </div>
          </div>
        </div>
      </section>

      {/* FRASE FINAL */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground italic mb-6">
              "O que a educação deve ensinar não são as respostas,  
              O essencial não é ter conquistado, mas ter lutado bem."
            </p>

            <footer className="text-primary-foreground/70">
              — Immanuel Kant
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default CartaConvite;
