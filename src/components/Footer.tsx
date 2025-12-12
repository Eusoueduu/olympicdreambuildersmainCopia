import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="font-display font-bold text-foreground text-lg">CO</span>
              </div>
              <span className="font-display font-semibold text-lg">
                Comunidade Olímpica
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Inspirando jovens atletas a alcançarem seus sonhos através do esporte, disciplina e dedicação.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/objetivos" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  Objetivos
                </Link>
              </li>
              <li>
                <Link to="/contatos" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                  Contatos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Valores</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li>🏅 Disciplina</li>
              <li>💪 Dedicação</li>
              <li>🎯 Foco</li>
              <li>🤝 Trabalho em Equipe</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Comunidade Olímpica. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
