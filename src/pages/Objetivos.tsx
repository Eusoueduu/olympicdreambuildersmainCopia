import { Layout } from "@/components/Layout";
import { Target, Heart, TrendingUp, Users, Lightbulb, Trophy } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Disciplina",
    description:
      "Desenvolver uma rotina de estudos consistente, entendendo que a disciplina é a base para alcançar qualquer objetivo acadêmico e pessoal.",
  },
  {
    icon: Heart,
    title: "Dedicação",
    description:
      "Cultivar o interesse pelo aprendizado e a dedicação em cada atividade, sabendo que o esforço diário é o que transforma sonhos em conquistas reais.",
  },
  {
    icon: TrendingUp,
    title: "Esforço Contínuo",
    description:
      "Manter o compromisso com a evolução constante, superando desafios e aprendendo com cada experiência para crescer como estudante e competidor.",
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description:
      "Valorizar a colaboração e o apoio mútuo, entendendo que grandes conquistas nas olimpíadas e no conhecimento são alcançadas quando trabalhamos juntos.",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado",
    description:
      "Buscar conhecimento de forma contínua, absorvendo ensinamentos de professores, mentores e experiências em competições acadêmicas.",
  },
  {
    icon: Trophy,
    title: "Projetos Futuros",
    description:
      "Construir uma trajetória de sucesso nas olimpíadas estudantis, participando de competições regionais e nacionais, sempre mirando em alcançar o mais alto patamar do conhecimento.",
  },
];

const Objetivos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-6 animate-fade-up">
            Nossa Missão
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
            Objetivos da{" "}
            <span className="text-gradient-gold">Comunidade Olímpica</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Conheça os valores e objetivos que guiam nossos jovens estudantes em sua jornada rumo à excelência acadêmica e às Olimpíadas estudantis.
          </p>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {objectives.map((obj, index) => (
              <div
                key={obj.title}
                className={`group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-gold group-hover:scale-110 transition-all duration-300">
                  <obj.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {obj.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-up">
              Nossa <span className="text-gradient-gold">Visão</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-up animation-delay-100">
              A Comunidade Acadêmica nasceu com o propósito de inspirar e apoiar jovens estudantes em sua jornada de aprendizado. Acreditamos que o conhecimento é uma ferramenta poderosa para o desenvolvimento pessoal, ensinando valores como dedicação, perseverança e superação.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up animation-delay-200">
              Nosso compromisso é proporcionar um ambiente acolhedor onde Maitê e Manuela possam desenvolver todo seu potencial acadêmico, sempre com o apoio da família e da comunidade. Juntos, estamos construindo o caminho para um futuro brilhante nas Olimpíadas de Matemática, Ciências e demais desafios educacionais.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4 animate-fade-up">
            Acompanhe Nossa Jornada
          </h3>
          <p className="text-primary-foreground/80 max-w-xl mx-auto animate-fade-up animation-delay-100">
            Siga nossas redes sociais para acompanhar as conquistas e novidades das nossas atletas.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Objetivos;
