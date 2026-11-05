import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Instagram,
  Sparkles,
  HeartHandshake,
  Leaf,
  Gem,
  Home,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/clie_logo.png.asset.json";
import retrato from "@/assets/esteticista_retrato.png.asset.json";
import facial from "@/assets/facial.jpg";
import corporal from "@/assets/corporal.jpg";
import produtos from "@/assets/produtos.jpg";
import pele from "@/assets/pele.jpg";
import mascara from "@/assets/mascara.jpg";
import { waLink, GENERAL_MSG, treatmentMsg } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLIE Academy | Clínica de Estética em Porto Seguro - BA" },
      {
        name: "description",
        content:
          "Conheça a CLIE Academy, clínica de estética em Porto Seguro. Tratamentos faciais e corporais, limpeza de pele, drenagem linfática e muito mais.",
      },
      { property: "og:title", content: "CLIE Academy | Clínica de Estética em Porto Seguro - BA" },
      {
        property: "og:description",
        content:
          "Tratamentos faciais e corporais personalizados em Porto Seguro: limpeza de pele, drenagem linfática, massagem modeladora e mais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const INSTAGRAM = "https://www.instagram.com/clieclinica/";
const MAPS_QUERY = encodeURIComponent(
  "Av. dos Navegantes, 1645A - Antônio Tito, Porto Seguro - BA, 45810-000",
);

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

const treatments = [
  { name: "Limpeza de Pele", img: facial, desc: "Remove impurezas, desobstrui os poros e devolve frescor e luminosidade à pele." },
  { name: "Drenagem Linfática", img: corporal, desc: "Técnica manual suave que auxilia na redução do inchaço e promove sensação de leveza." },
  { name: "Massagem Modeladora", img: corporal, desc: "Movimentos firmes e ritmados que ajudam a contornar a silhueta e ativar a circulação." },
  { name: "Tratamentos Faciais", img: mascara, desc: "Protocolos que hidratam, revitalizam e cuidam da saúde da sua pele em cada fase." },
  { name: "Tratamentos Corporais", img: produtos, desc: "Cuidados para firmeza, textura e bem-estar do corpo, com atenção às suas necessidades." },
  { name: "Tratamento para Acne", img: pele, desc: "Abordagem cuidadosa para controlar a oleosidade e acompanhar a evolução da pele acneica." },
  { name: "Clareamento de Pele", img: pele, desc: "Protocolos que ajudam a uniformizar o tom e suavizar manchas com segurança." },
  { name: "Redução de Medidas", img: produtos, desc: "Combinação de técnicas para auxiliar na redução de medidas e no contorno corporal." },
  { name: "Protocolos Estéticos Personalizados", img: mascara, desc: "Um plano pensado exclusivamente para você, a partir de uma avaliação individual." },
];

const diferenciais = [
  { icon: HeartHandshake, t: "Atendimento personalizado", d: "Cada pessoa é única — e seu atendimento também." },
  { icon: Sparkles, t: "Protocolos individualizados", d: "Tratamentos desenhados a partir da sua avaliação." },
  { icon: Leaf, t: "Saúde e beleza da pele", d: "Cuidado que respeita o tempo e a natureza da sua pele." },
  { icon: Gem, t: "Atenção aos detalhes", d: "Do acolhimento ao pós-tratamento, tudo é pensado." },
  { icon: Home, t: "Ambiente acolhedor", d: "Um espaço tranquilo para você relaxar e se cuidar." },
  { icon: ShieldCheck, t: "Compromisso com o bem-estar", d: "Seu conforto e segurança vêm sempre em primeiro lugar." },
];

function WhatsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/30 px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-primary hover:text-primary";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled || open ? "bg-sage/95 shadow-soft backdrop-blur" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" aria-label="CLIE Academy - Início">
          <img src={logo.url} alt="CLIE Academy Clínica Estética" className="h-14 w-auto rounded-sm mix-blend-multiply" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} hidden !px-5 !py-2.5 lg:inline-flex`}>
          <WhatsIcon className="h-4 w-4" /> Agendar pelo WhatsApp
        </a>
        <button className="p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border/60 px-5 pb-6 lg:hidden" aria-label="Menu móvel">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/50 py-4 font-serif text-2xl">
              {n.label}
            </a>
          ))}
          <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-6 w-full`}>
            <WhatsIcon className="h-4 w-4" /> Agendar pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        {/* HERO */}
        <section id="inicio" className="relative bg-sage pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div className="reveal">
              <p className="eyebrow">Clínica de estética em Porto Seguro</p>
              <h1 className="mt-5 text-5xl leading-[1.02] text-charcoal sm:text-6xl lg:text-7xl">
                Realce sua beleza.
                <br />
                <em className="text-primary">Cuide de você.</em>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Tratamentos faciais e corporais personalizados para valorizar sua beleza, cuidar da sua pele e proporcionar mais bem-estar.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <WhatsIcon className="h-4 w-4" /> Agende sua avaliação
                </a>
                <a href="#tratamentos" className={btnGhost}>
                  Conheça nossos tratamentos <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "0.15s" }}>
              <div className="absolute -inset-4 translate-x-6 translate-y-6 rounded-t-full border border-primary/40" aria-hidden="true" />
              <img
                src={retrato.url}
                alt="Esteticista da CLIE Academy, clínica de estética em Porto Seguro"
                className="relative aspect-[4/5] w-full rounded-t-full object-cover shadow-soft"
              />
              <div className="absolute -bottom-5 -left-3 rounded-md bg-card px-5 py-4 shadow-soft sm:-left-8">
                <p className="font-serif text-xl italic text-charcoal">Cuidado sob medida</p>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">Porto Seguro · BA</p>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Sobre a clínica</p>
              <h2 className="mt-4 text-4xl leading-tight text-charcoal md:text-5xl">
                Beleza, cuidado e autoestima em cada detalhe.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
              <p>
                A CLIE Academy é uma clínica de estética em Porto Seguro dedicada a tratamentos faciais e corporais, com protocolos personalizados que respeitam a individualidade de cada pessoa.
              </p>
              <p>
                Acreditamos que cuidar da pele é também cuidar de si. Por isso, unimos técnica, escuta atenta e um ambiente acolhedor para que cada visita seja um verdadeiro momento de autocuidado e bem-estar.
              </p>
              <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className={`${btnGhost} mt-2`}>
                <WhatsIcon className="h-4 w-4" /> Fale com a nossa equipe
              </a>
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <img src={mascara} alt="Preparo de máscara facial na CLIE Academy" loading="lazy" width={896} height={1088} className="aspect-[3/4] w-full rounded-md object-cover" />
              <img src={corporal} alt="Sala de tratamentos corporais da clínica" loading="lazy" width={896} height={1088} className="mt-12 aspect-[3/4] w-full rounded-md object-cover" />
            </div>
            <div>
              <p className="eyebrow">Quem cuida de você</p>
              <h2 className="mt-4 text-4xl text-charcoal md:text-5xl">Seu cuidado em boas mãos.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Aqui, você é recebida com carinho e atenção desde o primeiro contato. Cada atendimento começa com uma conversa para entender seus objetivos e indicar o cuidado mais adequado para você.
              </p>
            </div>
          </div>
        </section>

        {/* TRATAMENTOS */}
        <section id="tratamentos" className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Tratamentos</p>
              <h2 className="mt-4 text-4xl text-charcoal md:text-5xl">Tratamentos faciais e corporais</h2>
              <p className="mt-5 text-muted-foreground">
                Da limpeza de pele à drenagem linfática e massagem modeladora: conheça os cuidados da CLIE Academy em Porto Seguro.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map((t) => (
                <article key={t.name} className="group flex flex-col overflow-hidden rounded-md bg-card shadow-soft transition-transform duration-500 hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <img src={t.img} alt={`${t.name} em Porto Seguro - CLIE Academy`} loading="lazy" width={896} height={1088} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl text-charcoal">{t.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                    <a href={waLink(treatmentMsg(t.name))} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary transition-all hover:gap-3">
                      <WhatsIcon className="h-4 w-4" /> Saiba mais <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="eyebrow">Diferenciais</p>
              <h2 className="mt-4 text-4xl text-charcoal md:text-5xl">Por que escolher a CLIE Academy?</h2>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {diferenciais.map(({ icon: Icon, t, d }) => (
                <div key={t} className="bg-background p-8 transition-colors hover:bg-card">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.25} />
                  <h3 className="mt-5 text-2xl text-charcoal">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-20 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-4xl md:text-6xl">
              Seu momento de <em className="text-champagne">autocuidado</em> começa aqui.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-primary-foreground/75">
              Entre em contato com nossa equipe e descubra o tratamento ideal para você.
            </p>
            <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-10 hover:!bg-accent`}>
              <WhatsIcon className="h-4 w-4" /> Quero agendar meu horário
            </a>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Localização e contato</p>
              <h2 className="mt-4 text-4xl text-charcoal md:text-5xl">Venha nos visitar</h2>
              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <address className="not-italic text-muted-foreground">
                    <strong className="block font-medium text-foreground">CLIE Academy Clínica Estética</strong>
                    Av. dos Navegantes, 1645A - Antônio Tito
                    <br />
                    Porto Seguro - BA, 45810-000
                  </address>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <a href="tel:+5573998109935" className="text-muted-foreground hover:text-primary">+55 73 99810-9935</a>
                </li>
                <li className="flex gap-4">
                  <Instagram className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">@clieclinica</a>
                </li>
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <WhatsIcon className="h-4 w-4" /> Chamar no WhatsApp
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={btnGhost}>
                  <Instagram className="h-4 w-4" /> Seguir no Instagram
                </a>
              </div>
            </div>
            <div className="min-h-[380px] overflow-hidden rounded-md shadow-soft">
              <iframe
                title="Mapa da CLIE Academy em Porto Seguro"
                src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                className="h-full min-h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sage pt-16 pb-8">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
          <div>
            <img src={logo.url} alt="CLIE Academy Clínica Estética" loading="lazy" className="h-24 w-auto mix-blend-multiply" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Clínica de estética em Porto Seguro especializada em tratamentos faciais e corporais personalizados.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-4 space-y-2">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-sm text-foreground/80 hover:text-primary">{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 text-sm text-foreground/80">
            <p className="eyebrow">Contato</p>
            <p>Av. dos Navegantes, 1645A - Antônio Tito, Porto Seguro - BA, 45810-000</p>
            <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><WhatsIcon className="h-4 w-4" /> +55 73 99810-9935</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Instagram className="h-4 w-4" /> @clieclinica</a>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl border-t border-charcoal/15 px-5 pt-6 text-center text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} CLIE Academy Clínica Estética. Todos os direitos reservados.
        </p>
      </footer>

      <a
        href={waLink(GENERAL_MSG)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition-transform hover:scale-110 md:right-6 md:bottom-6 md:h-16 md:w-16"
      >
        <WhatsIcon className="h-7 w-7 md:h-8 md:w-8" />
      </a>
    </div>
  );
}
