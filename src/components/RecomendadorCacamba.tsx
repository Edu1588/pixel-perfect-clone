import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { recomendarServico, type Recomendacao } from "@/lib/recomendacao.functions";

export function RecomendadorCacamba({ whatsappBase }: { whatsappBase: string }) {
  const recomendar = useServerFn(recomendarServico);
  const [tipo, setTipo] = useState("");
  const [volume, setVolume] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [res, setRes] = useState<Recomendacao | null>(null);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (tipo.trim().length < 3 || !volume.trim()) {
      setErro("Descreva o tipo de resíduo e o volume aproximado.");
      return;
    }
    setLoading(true);
    setErro(null);
    setRes(null);
    try {
      const r = await recomendar({ data: { tipo, volume, frequencia } });
      if (r.ok) setRes(r.data);
      else setErro(r.error);
    } catch {
      setErro("Não conseguimos gerar a recomendação. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  const waMsg = res
    ? encodeURIComponent(
        `Olá! Tenho ${tipo} (${volume}). A recomendação do site foi: ${res.servico} com ${res.cacamba}. Podem avaliar?`,
      )
    : "";

  const campo =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={enviar} className="rounded-2xl border border-border bg-card p-6">
        <label className="block text-sm font-semibold">
          Tipo de resíduo
          <textarea
            className={campo}
            rows={3}
            maxLength={500}
            placeholder="Ex.: aparas de filme PEBD, borra de PP, peças injetadas com defeito"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </label>
        <label className="mt-4 block text-sm font-semibold">
          Volume aproximado
          <input
            className={campo}
            maxLength={200}
            placeholder="Ex.: 2 toneladas, 10 big bags, 8 m³"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </label>
        <label className="mt-4 block text-sm font-semibold">
          Frequência (opcional)
          <select className={campo} value={frequencia} onChange={(e) => setFrequencia(e.target.value)}>
            <option value="">Selecione</option>
            <option>Pontual (uma vez)</option>
            <option>Semanal</option>
            <option>Quinzenal</option>
            <option>Mensal</option>
          </select>
        </label>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Analisando seu material..." : "Ver recomendação"}
        </button>
        {erro && <p className="mt-4 text-sm text-destructive">{erro}</p>}
      </form>

      <div className="rounded-2xl border border-border bg-secondary p-6" aria-live="polite">
        {!res && !loading && (
          <p className="text-muted-foreground">
            Conte o que sua empresa gera e indicamos o serviço e a caçamba mais adequados. A avaliação final é
            sempre feita pela nossa equipe.
          </p>
        )}
        {loading && <p className="animate-pulse text-muted-foreground">Preparando sua recomendação...</p>}
        {res && (
          <div>
            <p className="eyebrow text-primary">Serviço indicado</p>
            <p className="mt-1 text-xl font-bold">{res.servico}</p>
            <p className="eyebrow mt-5 text-primary">Caçamba sugerida</p>
            <p className="mt-1 text-xl font-bold">{res.cacamba}</p>
            <p className="mt-5 text-muted-foreground">{res.justificativa}</p>
            {res.dicas.length > 0 && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
                {res.dicas.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            <a
              href={`${whatsappBase}?text=${waMsg}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"
            >
              Solicitar avaliação no WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
