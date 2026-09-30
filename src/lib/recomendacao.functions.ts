import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const inputSchema = z.object({
  tipo: z.string().trim().min(3).max(500),
  volume: z.string().trim().min(1).max(200),
  frequencia: z.string().trim().max(100).optional(),
});

const resultSchema = z.object({
  servico: z.string(),
  cacamba: z.string(),
  justificativa: z.string(),
  dicas: z.array(z.string()).max(4),
});

export type Recomendacao = z.infer<typeof resultSchema>;

const SYSTEM = `Você é consultor da Plásticos Sallum (São Paulo), empresa com 50 anos que compra resíduos plásticos pós-industriais.
Serviços: "Compra de resíduos plásticos pós-industriais", "Retirada de materiais", "Caçambas e logística", "Moagem e beneficiamento".
Caçambas disponíveis (use exatamente um destes nomes): "Sem caçamba (coleta avulsa)" para pequenos volumes, "Caçamba Rollon 5 m³", "Caçamba Rollon 15 m³", "Caçamba Rollon 30 m³" para grandes volumes ou geração contínua.
Não prometa preços; diga que a avaliação final é feita pela equipe.
Responda SOMENTE com JSON: {"servico": string, "cacamba": string, "justificativa": string (até 3 frases), "dicas": string[] (2 a 3 dicas curtas de separação/preparo)}. Português do Brasil.`;

export const recomendarServico = createServerFn({ method: "POST" })
  .inputValidator((d) => inputSchema.parse(d))
  .handler(async ({ data }): Promise<{ ok: true; data: Recomendacao } | { ok: false; error: string }> => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) return { ok: false, error: "Serviço indisponível no momento." };
    const openai = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    });
    try {
      const result = streamText({
        model: openai.responses("openai/gpt-6-astra"),
        system: SYSTEM,
        prompt: `Tipo de resíduo: ${data.tipo}\nVolume: ${data.volume}\nFrequência: ${data.frequencia || "não informada"}`,
        maxRetries: 0,
        providerOptions: {
          openai: {
            forceReasoning: true,
            reasoningEffort: "low",
            reasoningSummary: "auto",
            store: false,
            include: ["reasoning.encrypted_content"],
          },
        },
      });
      const text = await result.text;
      const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
      return { ok: true, data: resultSchema.parse(JSON.parse(json)) };
    } catch (e: unknown) {
      console.error("recomendacao error", e);
      const status = (e as { statusCode?: number })?.statusCode;
      if (status === 429) return { ok: false, error: "Muitas consultas agora. Tente em alguns instantes." };
      if (status === 402 || status === 403) return { ok: false, error: "Recomendação temporariamente indisponível." };
      return { ok: false, error: "Não conseguimos gerar a recomendação. Tente novamente." };
    }
  });
