import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Star, Target } from "lucide-react";
import heroBg from "@/assets/Design sem nome.jpg";
import maitePlaceholder from "@/assets/WhatsApp Image 2025-12-03 at 13.42.26.jpeg";
import manuelaPlaceholder from "@/assets/manu8.jpeg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-medium text-sm mb-6 animate-fade-up">
              🏅 Transformando Estudantes em Jovens Olímicos
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up animation-delay-100">
              Bem-vinda à{" "}
              <span className="text-gradient-gold">Comunidade Olímpica Acadêmica</span>
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
              Um espaço dedicado ao desenvolvimento acadêmico, com foco nas principais Olimpíadas estudantis: OBA, OBMEP, Canguru, OIMSF, GOA E Matific. Aqui, conhecimento, preparação e portunidades se unem para formar os campeões da educação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
              <Button variant="gold" size="xl" asChild>
                <Link to="/sobre">
                  Conheça mais
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/objetivos">
                  Nossos Objetivos
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Athletes Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Nossas Atletas
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Conheça Nossas <span className="text-gradient-gold">Estrelas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Duas jovens talentosas que representam o espírito olímpico por meio de suas conquistas, dedicação e excelência, agora também nas Olimpíadas do Conhecimento, onde o esforço intelectual se transforma em medalhas e inspiração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Maitê Card */}
            <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 animate-fade-up">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={maitePlaceholder}
                  alt="Maitê Bentes Amorim Luzia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="text-secondary text-sm font-medium">Atleta</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Maitê Bentes Amorim Luzia
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4 line-clamp-4">
                  Medalhista nacional e internacional em olimpíadas científicas,  violinista, trilíngue fluente ( português,  inglês e espanhol) joga xadrez e faz cubo mágico
                </p>
                <Button variant="gold" size="sm" asChild>
                  <Link to="/sobre">Ver Perfil</Link>
                </Button>
              </div>
            </div>

            {/* Manuela Card */}
            <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 animate-fade-up animation-delay-200">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={manuelaPlaceholder}
                  alt="Manuela Bentes Amorim Luzia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-secondary" />
                  <span className="text-secondary text-sm font-medium">Atleta</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Manuela Bentes Amorim Luzia
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4 line-clamp-4">
                  Medalhista nacional e internacional em olimpíadas científicas,  violinista, trilíngue fluente ( português,  inglês e espanhol) joga xadrez e faz cubo mágico
                </p>
                <Button variant="gold" size="sm" asChild>
                  <Link to="/sobre">Ver Perfil</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 animate-fade-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Educação</h3>
              <p className="text-muted-foreground text-sm">O alicerce das grandes conquistas acadêmicas.</p>
            </div>

            <div className="text-center p-6 animate-fade-up animation-delay-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Preparação</h3>
              <p className="text-muted-foreground text-sm">Dedicação constante à excelência nos desafios estudantis.</p>
            </div>

            <div className="text-center p-6 animate-fade-up animation-delay-200">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Oportunidades</h3>
              <p className="text-muted-foreground text-sm">Unindo conhecimento e prática para formar os campeões do futuro.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
