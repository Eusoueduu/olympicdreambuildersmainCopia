import { Layout } from "@/components/Layout";
import { Heart, Shield, Users, Zap, Target, Star, Trophy, Flame } from "lucide-react";

const valores = [
  {
    icon: Shield,
    title: "Integridade",
    description: "Agimos com honestidade e ética em todas as situações, dentro e fora das competições.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Paixão",
    description: "Amamos o esporte e nos dedicamos de coração a cada treino e competição.",
    color: "bg-olympic-red/10 text-olympic-red",
  },
  {
    icon: Users,
    title: "Respeito",
    description: "Tratamos todos com dignidade - adversários, árbitros, treinadores e colegas.",
    color: "bg-olympic-green/10 text-olympic-green",
  },
  {
    icon: Zap,
    title: "Determinação",
    description: "Enfrentamos desafios com coragem e persistência, sem desistir dos nossos sonhos.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Target,
    title: "Foco",
    description: "Mantemos a concentração nos objetivos, evitando distrações que atrapalhem nosso progresso.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Star,
    title: "Excelência",
    description: "Buscamos sempre dar o nosso melhor, aprimorando técnicas e superando limites.",
    color: "bg-secondary/20 text-secondary-foreground",
  },
  {
    icon: Trophy,
    title: "Humildade",
    description: "Celebramos conquistas sem arrogância e aprendemos com as derrotas sem desânimo.",
    color: "bg-olympic-green/10 text-olympic-green",
  },
  {
    icon: Flame,
    title: "Espírito Olímpico",
    description: "Honramos os valores olímpicos: amizade, respeito e excelência em tudo que fazemos.",
    color: "bg-olympic-red/10 text-olympic-red",
  },
];

const Valores = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-6 animate-fade-up">
            O Que Nos Move
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
            Nossos <span className="text-gradient-gold">Valores</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Os princípios que guiam nossas atletas em sua jornada esportiva e na construção do caráter.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valores.map((valor, index) => (
              <div
                key={valor.title}
                className="group bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${valor.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <valor.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {valor.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Olympic Rings Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full border-4 border-olympic-blue" />
              <div className="w-12 h-12 rounded-full border-4 border-olympic-black -ml-4" />
              <div className="w-12 h-12 rounded-full border-4 border-olympic-red -ml-4" />
              <div className="w-12 h-12 rounded-full border-4 border-secondary -ml-4" />
              <div className="w-12 h-12 rounded-full border-4 border-olympic-green -ml-4" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 animate-fade-up">
              O Espírito <span className="text-gradient-gold">Olímpico</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed animate-fade-up animation-delay-100">
              Inspiradas pelos ideais olímpicos, nossas atletas aprendem que o verdadeiro valor não está apenas em vencer, 
              mas em participar com dignidade, superar seus limites e representar seus valores com orgulho. 
              Cada treino é uma oportunidade de crescimento, cada competição uma lição de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground font-medium italic mb-6 animate-fade-up">
              "O importante não é vencer, mas participar. O essencial não é ter conquistado, mas ter lutado bem."
            </p>
            <footer className="text-primary-foreground/70 animate-fade-up animation-delay-100">
              — Pierre de Coubertin, Fundador dos Jogos Olímpicos Modernos
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Valores;
