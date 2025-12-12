import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useCriancas() {
  const [criancas, setCriancas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      const { data, error } = await supabase.from("criancas").select("*");

      if (error) {
        console.error("Erro ao carregar crianças:", error);
      }

      setCriancas(data || []);
      setLoading(false);
    }

    carregar();
  }, []);

  return { criancas, loading };
}
