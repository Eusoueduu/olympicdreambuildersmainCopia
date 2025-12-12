-- Tabela de crianças
CREATE TABLE public.criancas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  resumo TEXT,
  foto_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de certificações
CREATE TABLE public.certificacoes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  id_crianca UUID NOT NULL REFERENCES public.criancas(id) ON DELETE CASCADE,
  nome_certificado TEXT NOT NULL,
  descricao TEXT,
  data DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de contatos
CREATE TABLE public.contatos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  instagram TEXT,
  facebook TEXT,
  telefone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.criancas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificacoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contatos ENABLE ROW LEVEL SECURITY;

-- Políticas públicas de leitura (todos podem ver)
CREATE POLICY "Todos podem ver crianças" ON public.criancas FOR SELECT USING (true);
CREATE POLICY "Todos podem ver certificações" ON public.certificacoes FOR SELECT USING (true);
CREATE POLICY "Todos podem ver contatos" ON public.contatos FOR SELECT USING (true);

-- Inserir dados iniciais das crianças
INSERT INTO public.criancas (nome, resumo, foto_url) VALUES
('Maitê Bentes Amorim Luzia', 'Uma jovem atleta dedicada e apaixonada pelo esporte, sempre buscando superar seus limites e inspirar outros através de sua determinação e disciplina.', NULL),
('Manuela Bentes Amorim Luzia', 'Com energia contagiante e espírito competitivo, ela demonstra que a dedicação e o trabalho duro são os caminhos para alcançar grandes conquistas.', NULL);

-- Inserir dados de contato inicial
INSERT INTO public.contatos (instagram, facebook, telefone) VALUES
('@comunidadeolimpica', 'Comunidade Olímpica', '(00) 00000-0000');

-- Inserir algumas certificações de exemplo
INSERT INTO public.certificacoes (id_crianca, nome_certificado, descricao, data)
SELECT id, 'Medalha de Ouro - Natação', 'Primeiro lugar na competição regional de natação infantil', '2024-06-15'
FROM public.criancas WHERE nome LIKE 'Maitê%';

INSERT INTO public.certificacoes (id_crianca, nome_certificado, descricao, data)
SELECT id, 'Certificado de Excelência Esportiva', 'Reconhecimento por desempenho excepcional em atividades físicas', '2024-03-20'
FROM public.criancas WHERE nome LIKE 'Maitê%';

INSERT INTO public.certificacoes (id_crianca, nome_certificado, descricao, data)
SELECT id, 'Troféu de Participação - Atletismo', 'Participação destacada no campeonato municipal de atletismo', '2024-08-10'
FROM public.criancas WHERE nome LIKE 'Manuela%';

INSERT INTO public.certificacoes (id_crianca, nome_certificado, descricao, data)
SELECT id, 'Diploma de Honra ao Mérito', 'Reconhecimento por dedicação e espírito esportivo', '2024-05-05'
FROM public.criancas WHERE nome LIKE 'Manuela%';