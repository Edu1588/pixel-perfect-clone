import { createFileRoute } from "@tanstack/react-router";
import heroGalpao from "@/assets/hero-galpao.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plásticos Sallum | Compra de resíduos plásticos pós-industriais" },
      {
        name: "description",
        content:
          "Desde 1976, a Plásticos Sallum compra resíduos plásticos pós-industriais de empresas, avalia o material e organiza a retirada em São Paulo e região.",
      },
      {
        property: "og:title",
        content: "Plásticos Sallum | Compra de resíduos plásticos pós-industriais",
      },
      {
        property: "og:description",
        content:
          "Você informa o material. A Sallum avalia, compra e cuida da retirada. Experiência desde 1976.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TELEFONE = "(11) 5622-0348";
const EMAIL = "contato@plasticossallum.com.br";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Sou da empresa [NOME DA EMPRESA]. Temos [TIPO DE MATERIAL] para avaliação.\nCidade/local da retirada: [CIDADE]\nVolume aproximado: [VOLUME]\nGeração: [PONTUAL / RECORRENTE]\nGostaria de verificar a possibilidade de compra e retirada.",
);
const WHATSAPP_URL = `https://wa.me/551156220348?text=${WHATSAPP_MSG}`;

const menu = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "O que compramos", href: "#o-que-compramos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const servicos = [
  {
    titulo: "Compra de resíduos plásticos pós-industriais",
    texto:
      "Avaliamos materiais gerados por processos industriais e de transformação, de acordo com tipo, volume, condição e localização.",
  },
  {
    titulo: "Retirada de materiais",
    texto:
      "Organizamos a coleta conforme a disponibilidade do material e a viabilidade logística da operação.",
  },
  {
    titulo: "Caçambas e logística",
    texto:
      "Quando aplicável, a operação pode envolver caçambas Rollon e estrutura de coleta em São Paulo e região.",
  },
  {
    titulo: "Moagem e beneficiamento",
    texto:
      "O material pode seguir para processamento e moagem conforme a especificação da operação, com parceiros especializados.",
  },
];

const passos = [
  {
    titulo: "Conte o que você tem",
    texto:
      "Envie uma foto e informe o tipo de material, o volume aproximado, a cidade e se a geração é pontual ou recorrente.",
  },
  {
    titulo: "Nossa equipe avalia",
    texto:
      "Analisamos o material e verificamos as condições comerciais e logísticas para a retirada.",
  },
  {
    titulo: "Combinamos a operação",
    texto:
      "Definimos valores, documentação, prazo e forma de coleta de acordo com o que foi negociado.",
  },
  {
    titulo: "Retiramos o material",
    texto:
      "A equipe organiza a retirada para que o resíduo deixe sua operação com mais segurança e previsibilidade.",
  },
  {
    titulo: "O plástico segue para um novo ciclo",
    texto:
      "O material é encaminhado ao fluxo de processamento acordado para continuar gerando valor na cadeia.",
  },
];

const diferenciais = [
  "Experiência de cinco décadas no mercado",
  "Atendimento direto e próximo",
  "Avaliação de material e volume antes da retirada",
  "Operações pontuais ou recorrentes",
  "Emissão de nota fiscal, conforme a negociação",
  "Logística orientada à necessidade da empresa",
  "Compromisso com o reaproveitamento e a responsabilidade ambiental",
];

const faq = [
  {
    q: "Quais resíduos plásticos a Sallum compra?",
    a: "Trabalhamos com resíduos plásticos pós-industriais, sujeitos à avaliação do tipo de material, condição, volume e localização. Envie uma foto para nossa equipe orientar você.",
  },
  {
    q: "A Sallum faz a retirada?",
    a: "A possibilidade de retirada é analisada conforme o material, o volume, a localização e a logística da operação.",
  },
  {
    q: "Existe volume mínimo?",
    a: "A viabilidade depende do material, do volume e da distância. Fale com a equipe para uma avaliação comercial.",
  },
  {
    q: "A empresa emite nota fiscal?",
    a: "Sim, a compra é feita com nota fiscal. A forma de emissão segue a condição comercial e fiscal aplicável a cada operação.",
  },
  {
    q: "O pagamento é à vista?",
    a: "Trabalhamos com pagamento à vista. Confirme a condição para o seu material no momento da cotação.",
  },
  {
    q: "Vocês atendem empresas com geração recorrente?",
    a: "Sim. É possível avaliar uma rotina de retiradas conforme o volume e a frequência de geração da sua empresa.",
  },
  {
    q: "Como solicito uma cotação?",
    a: "Envie seu nome, empresa, cidade, fotos do material, volume aproximado e telefone. Nossa equipe retornará para avaliar a operação.",
  },
];

function BotaoPrimario({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-full bg-lime px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-soft transition-transform hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function BotaoSecundario({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-full border border-deep-foreground/40 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-deep-foreground transition-colors hover:bg-deep-foreground/10"
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 border-b border-deep bg-deep text-deep-foreground">
        <div className="section-x flex h-16 items-center justify-between gap-6">
          <a href="#topo" className="leading-none">
            <span className="block font-display text-lg font-extrabold uppercase tracking-tight">
              Plásticos Sallum
            </span>
            <span className="eyebrow text-lime">50 anos · desde 1976</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {menu.map((item) => (
              <a key={item.href} href={item.href} className="transition-opacity hover:opacity-70">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="hidden rounded-full bg-lime px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-lime-foreground sm:inline-flex"
          >
            Solicite uma cotação
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative isolate overflow-hidden bg-deep text-deep-foreground">
        <img
          src={heroGalpao}
          alt="Fardos de resíduo plástico pós-industrial organizados em galpão"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="section-x grid gap-10 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow text-lime">Compra de resíduos plásticos pós-industriais</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Seu resíduo plástico pode voltar a gerar valor.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-deep-foreground/85">
              A Plásticos Sallum compra resíduos plásticos pós-industriais de empresas, organiza a
              retirada e ajuda sua operação a liberar espaço com mais agilidade e responsabilidade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BotaoPrimario href="#contato">Solicite uma cotação</BotaoPrimario>
              <BotaoSecundario href={WHATSAPP_URL}>Fale no WhatsApp</BotaoSecundario>
            </div>
          </div>
          <ul className="grid gap-3 rounded-2xl border border-deep-foreground/20 bg-deep/70 p-6 backdrop-blur-sm">
            {[
              "Desde 1976",
              "Compra com nota fiscal",
              "Pagamento à vista",
              "Retirada conforme a operação",
              "Licença ambiental CETESB",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                <span className="h-2 w-2 shrink-0 rounded-full bg-lime" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Dor */}
      <section className="section-x py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              O plástico que sobra na produção não precisa virar um problema.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Aparas, refugos, peças, embalagens e outros resíduos podem ocupar área, atrapalhar a
              organização e perder valor quando ficam acumulados. A Sallum avalia o material da sua
              empresa e orienta o melhor caminho para a retirada.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Você não precisa descobrir sozinho o que fazer com o resíduo. Converse com quem
              trabalha com plásticos industriais há décadas.
            </p>
            <div className="mt-8">
              <BotaoPrimario href="#contato">Quero avaliar meu material</BotaoPrimario>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl bg-surface p-8 text-surface-foreground">
            <p className="eyebrow">Uma solução simples para a sua operação</p>
            {[
              "Você informa o material. Nós avaliamos a oportunidade.",
              "Você mostra o volume e a localização. Nós verificamos a retirada.",
              "A negociação é aprovada. O material segue para o próximo ciclo.",
            ].map((linha, i) => (
              <div key={linha} className="flex gap-4 border-t border-border pt-4 first:border-0">
                <span className="font-display text-2xl font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-medium">{linha}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="o-que-compramos" className="bg-secondary py-20">
        <div className="section-x">
          <p className="eyebrow text-primary">O que compramos</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            O que a Sallum pode fazer pela sua empresa
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {servicos.map((s) => (
              <div
                key={s.titulo}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <h3 className="text-xl font-bold text-primary">{s.titulo}</h3>
                <p className="mt-3 text-muted-foreground">{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="como-funciona" className="section-x py-20">
        <p className="eyebrow text-primary">Como funciona</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Da sua fábrica para um novo ciclo</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-5">
          {passos.map((p, i) => (
            <li key={p.titulo} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-3xl font-extrabold text-lime">{i + 1}</span>
              <h3 className="mt-3 text-base font-bold">{p.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.texto}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <BotaoPrimario href="#contato">Enviar meu material para avaliação</BotaoPrimario>
        </div>
      </section>

      {/* Institucional */}
      <section id="quem-somos" className="bg-deep py-20 text-deep-foreground">
        <div className="section-x grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow text-lime">Quem somos</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              50 anos transformando relações e materiais
            </h2>
          </div>
          <div className="space-y-4 text-lg text-deep-foreground/85">
            <p>
              Desde 1976, a Plásticos Sallum trabalha com resíduos plásticos e com as empresas que
              precisam dar um destino mais inteligente ao que sobra da produção.
            </p>
            <p>
              Nossa experiência foi construída no dia a dia: entendendo o material, respeitando a
              operação de cada cliente e cumprindo o que foi combinado.
            </p>
            <p>
              Mais do que comprar plástico, queremos construir relações que façam sentido para os
              dois lados: para a empresa que libera espaço e recupera valor, e para a cadeia que
              reaproveita uma matéria-prima importante.
            </p>
          </div>
        </div>
        <div className="section-x mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 rounded-xl border border-deep-foreground/15 p-4 text-sm font-medium"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lime" />
              {d}
            </div>
          ))}
        </div>
      </section>

      {/* Decisor */}
      <section className="section-x py-20">
        <div className="rounded-3xl bg-surface p-10 text-surface-foreground sm:p-14">
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
            Para quem precisa de uma solução prática, não de mais uma promessa
          </h2>
          <p className="mt-5 max-w-3xl text-lg">
            A Sallum atende empresas que geram resíduos plásticos em sua produção, armazenagem ou
            transformação e precisam de um parceiro para avaliar, comprar e retirar esse material.
          </p>
          <p className="mt-4 max-w-3xl text-lg">
            Se você é responsável pela produção, compras, logística, almoxarifado, sustentabilidade
            ou gestão de resíduos, fale conosco e envie as informações básicas da operação.
          </p>
          <div className="mt-8">
            <BotaoPrimario href={WHATSAPP_URL}>Falar com um especialista</BotaoPrimario>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-x pb-20">
        <p className="eyebrow text-primary">Dúvidas frequentes</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Perguntas que recebemos com frequência</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA final / contato */}
      <section id="contato" className="bg-primary py-20 text-primary-foreground">
        <div className="section-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Tem plástico pós-industrial parado na sua empresa?
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/85">
              Envie uma foto e algumas informações. A Sallum avalia o material e verifica a melhor
              forma de seguir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BotaoPrimario href={WHATSAPP_URL}>Solicitar cotação pelo WhatsApp</BotaoPrimario>
            </div>
          </div>
          <div className="rounded-2xl border border-primary-foreground/25 p-8">
            <p className="eyebrow text-lime">Contato</p>
            <ul className="mt-4 space-y-3 text-lg">
              <li>
                Telefone:{" "}
                <a href="tel:+551156220348" className="font-semibold underline-offset-4 hover:underline">
                  {TELEFONE}
                </a>
              </li>
              <li>
                E-mail:{" "}
                <a href={`mailto:${EMAIL}`} className="font-semibold underline-offset-4 hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li className="text-base text-primary-foreground/80">
                Estrada Antiga do Mar, 902 — Jardim Sul, São Paulo/SP
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-deep py-10 text-deep-foreground">
        <div className="section-x flex flex-col gap-3 text-sm text-deep-foreground/75 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display font-bold uppercase tracking-wide text-deep-foreground">
            Plásticos Sallum · 50 anos de compromisso sustentável
          </p>
          <p>Comércio de Plásticos Sallum Ltda. · CNPJ 47.669.361/0001-99</p>
        </div>
      </footer>

      {/* WhatsApp fixo no celular */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-1/2 z-50 w-[min(92%,26rem)] -translate-x-1/2 rounded-full bg-lime px-6 py-4 text-center font-display text-sm font-bold uppercase tracking-wider text-lime-foreground shadow-card lg:hidden"
      >
        Solicite uma cotação no WhatsApp
      </a>
    </div>
  );
}
