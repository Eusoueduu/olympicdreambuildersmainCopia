-- Adicionar campo de foto às certificações
ALTER TABLE public.certificacoes ADD COLUMN IF NOT EXISTS foto_url TEXT;

-- Criar tabela de fotos/viagens
CREATE TABLE public.fotos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  foto_url TEXT NOT NULL,
  data DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.fotos ENABLE ROW LEVEL SECURITY;

-- Política pública de leitura
CREATE POLICY "Todos podem ver fotos" ON public.fotos FOR SELECT USING (true);