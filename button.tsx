"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Leaf, MapPin, Phone, Mail, Hammer, Sprout, Trees, Lightbulb, Images, GraduationCap, Wrench, ShieldCheck, CalendarCheck, ExternalLink, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HoveniersbedrijfJohnKlaassen() {
  const base = "https://www.hoveniersbedrijfjohnklaassen.nl";

  const aanleg = [
    { icon: Lightbulb, title: "Ontwerp & advies", text: "Samen door uw tuin lopen, vragen bespreken en een praktisch plan maken voor indeling, beplanting, bestrating, pergola’s of vijvers." },
    { icon: Hammer, title: "Bestratingen", text: "Vakkundig straatwerk voor opritten, terrassen, paden en functionele buitenruimtes met de juiste materialen." },
    { icon: Trees, title: "Houten terrassen", text: "Warme, natuurlijke terrassen die aansluiten bij woning, tuin en gebruiksgemak." },
    { icon: ShieldCheck, title: "Schuttingen & tuinschermen", text: "Privacy, beschutting en een nette tuinafscheiding, stevig geplaatst en passend bij de tuin." },
    { icon: Wrench, title: "Overkappingen", text: "Meer comfort en beschutting in de tuin met een praktische en duurzame buitenconstructie." },
    { icon: Sprout, title: "Beplanting & graszoden", text: "Bomen, hagen, planten en gazons met aandacht voor standplaats, onderhoud en seizoenen." },
    { icon: Leaf, title: "Waterpartijen", text: "Vijvers en wateraccenten die rust, sfeer en leven aan de tuin toevoegen." },
    { icon: Lightbulb, title: "Tuinverlichting", text: "Functionele en sfeervolle verlichting zodat de tuin ook ’s avonds mooi en bruikbaar blijft." },
  ];

  const onderhoud = [
    "Periodiek begeleidend tuinonderhoud",
    "Hagen snoeien en vormgeven",
    "Zomerbeurt, winterbeurt en voorjaarsbeurt",
    "Gazononderhoud en vijveronderhoud",
    "Werkzaamheden afgestemd op wat u zelf wilt doen",
    "Vaste klanten ontvangen jaarlijks een onderhoudsformulier",
  ];

  const projecten = [
    { naam: "Familie Brouwers", plaats: "Gilze", type: "Particuliere tuin", image: `${base}/albums/14/01_fam_c_brouwers.jpg`, omschrijving: "Complete tuinaanleg rondom een woning met bestrating, groenstructuur en nette erfafscheiding." },
    { naam: "Plantencentrum Princenbosch", plaats: "Molenschot", type: "Bedrijfsterrein / plantencentrum", image: `${base}/albums/15/01_plantencentrum_princenbosch.jpg`, omschrijving: "Groene routing, bestrating en beplanting rond een commerciële buitenruimte." },
    { naam: "Familie van den Ouweland", plaats: "Gilze", type: "Terras & erf", image: `${base}/albums/16/01_fam.ouweland.jpg`, omschrijving: "Strakke verharding, terrasopbouw en praktische buitenruimte bij huis." },
    { naam: "Familie van Eijck", plaats: "Ulvenhout", type: "Moderne tuin", image: `${base}/albums/17/01_fam_van_eijck.jpg`, omschrijving: "Moderne villatuin met niveauverschillen, gazon, beplanting en royale terraszones." },
    { naam: "Familie de Vet", plaats: "Gilze", type: "Particuliere tuin", image: `${base}/albums/18/01_fam_de_vet.jpg`, omschrijving: "Onderhoudsvriendelijke gezinstuin met beplanting, bestrating en duidelijke lijnen." },
    { naam: "Speelboerderij De Vossenberg", plaats: "Gilze", type: "Recreatie & speelomgeving", image: `${base}/albums/19/01_vossenberg.jpg`, omschrijving: "Groene en veilige buitenruimte rondom speelvoorzieningen en recreatiegebied." },
    { naam: "Familie van Beek", plaats: "Gilze", type: "Particuliere tuin", image: `${base}/albums/20/01_fam_van_beek.jpg`, omschrijving: "Tuinproject met aandacht voor groen, bestrating en dagelijks gebruiksgemak." },
    { naam: "Familie Jac. van Hoek", plaats: "Gilze", type: "Particuliere tuin", image: `${base}/albums/21/01_fam_jac_van_hoek.jpg`, omschrijving: "Verzorgde aanleg met sterke balans tussen beplanting, paden en terrasruimte." },
    { naam: "Familie de Vet-Roozen", plaats: "Gilze", type: "Particuliere tuin", image: `${base}/albums/22/01_fam_de_vet_roozen.jpg`, omschrijving: "Praktische tuinoplossing met nette afwerking en duurzame materialen." },
    { naam: "Edwin de Vet", plaats: "Gilze", type: "Particuliere tuin", image: `${base}/albums/23/01_edwin_de_vet.jpg`, omschrijving: "Buitenruimte met focus op onderhoud, gebruiksgemak en uitstraling." },
  ];

  const kernwaarden = ["Kwaliteit sinds 1994", "Betrouwbaar en persoonlijk contact", "Aanleg, onderhoud, advies en materialen", "Voor particulieren én bedrijven", "Actief in Gilze en omgeving", "Erkend leerbedrijf met aandacht voor vakmanschap"];

  return (
    <div className="min-h-screen bg-[#f6f2e8] text-stone-950">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f6f2e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-900 text-white shadow-sm"><Leaf className="h-7 w-7" /></div>
            <div><div className="text-xl font-black leading-none tracking-tight">John Klaassen</div><div className="text-xs font-bold uppercase tracking-[0.2em] text-green-800">Compleet voor uw tuin</div></div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-stone-700 xl:flex">
            <a href="#diensten" className="hover:text-green-800">Diensten</a><a href="#onderhoud" className="hover:text-green-800">Onderhoud</a><a href="#projecten" className="hover:text-green-800">Projecten</a><a href="#over" className="hover:text-green-800">Over ons</a><a href="#vacatures" className="hover:text-green-800">Vacatures</a><a href="#contact" className="hover:text-green-800">Contact</a>
          </nav>
          <div className="flex items-center gap-3"><Button asChild className="hidden rounded-2xl bg-green-900 text-white hover:bg-green-950 md:inline-flex"><a href="tel:0653209296"><Phone className="mr-2 h-4 w-4" /> Bel direct</a></Button><Button variant="outline" size="icon" className="rounded-2xl border-green-900/20 bg-white/60 xl:hidden"><Menu className="h-5 w-5" /></Button></div>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(22,101,52,0.22),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(132,204,22,0.16),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-900/15 bg-white/75 px-4 py-2 text-sm font-bold text-green-950 shadow-sm"><Trees className="h-4 w-4" /> Hoveniersbedrijf in Gilze en omgeving sinds 1994</div>
              <h1 className="mb-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">Een tuin die klopt. Van eerste plan tot jarenlang onderhoud.</h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">Hoveniersbedrijf John Klaassen verzorgt aanleg, onderhoud en advies voor particulieren en bedrijven. Met vakkennis, duidelijke afspraken en persoonlijk overleg.</p>
              <div className="flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="rounded-2xl bg-green-900 px-7 text-white hover:bg-green-950"><a href="#contact">Bespreek uw tuin <ArrowRight className="ml-2 h-4 w-4" /></a></Button><Button asChild size="lg" variant="outline" className="rounded-2xl border-green-900/25 bg-white/70 px-7 text-green-950 hover:bg-white"><a href="#projecten">Bekijk projecten</a></Button></div>
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">{[["1994", "actief sinds"], ["10", "projectalbums"], ["1", "partij voor alles"]].map(([number, label]) => (<div key={label} className="rounded-3xl bg-white/75 p-5 shadow-sm ring-1 ring-stone-200"><div className="text-3xl font-black text-green-950">{number}</div><div className="text-sm font-medium text-stone-600">{label}</div></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.15 }}>
              <div className="relative rounded-[2.5rem] bg-white p-4 shadow-2xl ring-1 ring-stone-200"><img src={`${base}/albums/17/01_fam_van_eijck.jpg`} alt="Moderne tuin aangelegd door Hoveniersbedrijf John Klaassen" className="h-[560px] w-full rounded-[1.9rem] object-cover" /><div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-white/88 p-5 shadow-xl backdrop-blur"><p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-green-800">Project uit portfolio</p><h2 className="text-2xl font-black">Moderne tuinaanleg met terras, gazon en beplanting.</h2></div></div>
            </motion.div>
          </div>
        </section>

        <section id="diensten" className="bg-white py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="mb-3 font-black uppercase tracking-[0.2em] text-green-800">Aanleg</p><h2 className="text-4xl font-black tracking-tight md:text-5xl">Alles voor een complete tuin, professioneel uitgevoerd.</h2></div><p className="max-w-2xl leading-8 text-stone-600 lg:justify-self-end">Bij aanleg draait het om vakmanschap en materialenkennis. John Klaassen levert materialen, verzorgt de uitvoering en denkt praktisch mee over wat past bij woning, budget en onderhoud.</p></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{aanleg.map(({ icon: Icon, title, text }) => (<Card key={title} className="group rounded-[2rem] border-stone-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><CardContent className="p-7"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-900 transition group-hover:bg-green-900 group-hover:text-white"><Icon className="h-7 w-7" /></div><h3 className="mb-3 text-xl font-black">{title}</h3><p className="leading-7 text-stone-600">{text}</p></CardContent></Card>))}</div></div></section>

        <section id="onderhoud" className="py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center"><div className="overflow-hidden rounded-[2.25rem] bg-stone-950 shadow-2xl"><img src={`${base}/albums/15/01_plantencentrum_princenbosch.jpg`} alt="Onderhoud en beplanting bij Plantencentrum Princenbosch" className="h-[460px] w-full object-cover opacity-90" /></div><div><p className="mb-3 font-black uppercase tracking-[0.2em] text-green-800">Onderhoud</p><h2 className="mb-5 text-4xl font-black tracking-tight md:text-5xl">Meer lucht, licht en ruimte in uw tuin.</h2><p className="mb-8 leading-8 text-stone-700">Goed onderhoud zorgt ervoor dat u langer van uw tuin geniet. Bij periodiek onderhoud wordt afgesproken welke werkzaamheden u zelf doet en waarvoor het team van John Klaassen zorgt.</p><div className="grid gap-3 sm:grid-cols-2">{onderhoud.map((item) => (<div key={item} className="flex gap-3 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200"><CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-800" /><p className="font-semibold leading-6 text-stone-800">{item}</p></div>))}</div></div></div></section>

        <section id="projecten" className="bg-stone-950 py-20 text-white"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="mb-3 font-black uppercase tracking-[0.2em] text-lime-300">Projecten</p><h2 className="text-4xl font-black tracking-tight md:text-5xl">Echte projecten uit het bestaande portfolio.</h2></div><p className="max-w-2xl leading-8 text-stone-300 lg:justify-self-end">De oude website bevat tien projectalbums. In deze professionele versie zijn ze zichtbaar als portfolio met foto, plaats, type werk en korte toelichting.</p></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projecten.map((project, index) => (<Card key={project.naam} className="group overflow-hidden rounded-[2rem] border-white/10 bg-white/10 text-white shadow-none backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"><div className="relative h-64 overflow-hidden bg-green-900"><img src={project.image} alt={`${project.naam} ${project.plaats}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute left-4 top-4 rounded-full bg-stone-950/70 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-lime-200 backdrop-blur">Project {String(index + 1).padStart(2, "0")}</div></div><CardContent className="p-6"><div className="mb-3 flex items-center gap-2 text-sm font-bold text-lime-200"><Images className="h-4 w-4" /> {project.type}</div><h3 className="mb-1 text-2xl font-black">{project.naam}</h3><p className="mb-4 flex items-center gap-2 text-sm font-semibold text-stone-300"><MapPin className="h-4 w-4" /> {project.plaats}</p><p className="leading-7 text-stone-300">{project.omschrijving}</p></CardContent></Card>))}</div></div></section>

        <section id="over" className="bg-white py-20"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div className="rounded-[2.25rem] bg-green-950 p-8 text-white shadow-xl md:p-10"><p className="mb-4 font-black uppercase tracking-[0.2em] text-lime-300">Over ons</p><h2 className="mb-6 text-4xl font-black tracking-tight">Alles rondom de tuin uit handen nemen.</h2><p className="mb-8 leading-8 text-green-50">Sinds 1994 staat Hoveniersbedrijf John Klaassen voor kwaliteit, betrouwbaarheid en persoonlijk contact. Het bedrijf ontwerpt, verwijdert, plant, bestraat, plaatst schuttingen en levert benodigde materialen.</p><div className="grid gap-3 sm:grid-cols-2">{kernwaarden.map((waarde) => (<div key={waarde} className="flex gap-3 rounded-2xl bg-white/10 p-4"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" /><p className="font-semibold leading-6 text-green-50">{waarde}</p></div>))}</div></div><div className="grid gap-6 md:grid-cols-2"><Card className="rounded-[2rem] border-stone-200 shadow-sm"><CardContent className="p-7"><GraduationCap className="mb-5 h-10 w-10 text-green-900" /><h3 className="mb-3 text-2xl font-black">Erkend leerbedrijf</h3><p className="leading-7 text-stone-600">Jongeren doen ervaring op met alle voorkomende werkzaamheden, niet alleen sjouwen en kruien. Er is aandacht voor werkhouding, gereedschap en machines.</p></CardContent></Card><Card className="rounded-[2rem] border-stone-200 shadow-sm"><CardContent className="p-7"><Wrench className="mb-5 h-10 w-10 text-green-900" /><h3 className="mb-3 text-2xl font-black">Eigen machines</h3><p className="leading-7 text-stone-600">Het bedrijf onderhoudt zelf machines en verricht kleine reparaties, wat past bij de praktische en vakgerichte manier van werken.</p></CardContent></Card><div className="md:col-span-2 overflow-hidden rounded-[2rem] shadow-xl"><img src={`${base}/albums/14/01_fam_c_brouwers.jpg`} alt="Tuinaanleg Familie Brouwers Gilze" className="h-[320px] w-full object-cover" /></div></div></div></section>

        <section id="vacatures" className="py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8"><div><p className="mb-3 font-black uppercase tracking-[0.2em] text-green-800">Vacatures</p><h2 className="mb-5 text-4xl font-black tracking-tight md:text-5xl">Kom werken in het groen.</h2><p className="leading-8 text-stone-700">De bestaande website vermeldt dat het bedrijf op zoek is naar nieuwe mensen. Deze sectie maakt dat direct zichtbaar en actiegericht.</p></div><div className="grid gap-4">{["Zaterdag- of vakantiehulp vanaf 15 jaar", "BBL leerling hovenier", "Vakbekwaam hovenier"].map((vacature) => (<a key={vacature} href="mailto:john@hoveniersbedrijfjohnklaassen.nl" className="group flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-lg"><span className="font-black">{vacature}</span><ExternalLink className="h-5 w-5 text-green-800 transition group-hover:translate-x-1" /></a>))}</div></div></section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="overflow-hidden rounded-[2.5rem] bg-green-950 text-white shadow-2xl"><div className="grid lg:grid-cols-[1.05fr_0.95fr]"><div className="p-8 md:p-12"><p className="mb-3 font-black uppercase tracking-[0.2em] text-lime-300">Contact</p><h2 className="mb-5 text-4xl font-black tracking-tight md:text-5xl">Nieuwsgierig naar de mogelijkheden voor uw tuin?</h2><p className="mb-8 max-w-xl leading-8 text-green-50">Neem contact op voor aanleg, onderhoud, advies of vacatures. Overdag is het bedrijf het beste telefonisch bereikbaar.</p><div className="flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="rounded-2xl bg-white text-green-950 hover:bg-green-50"><a href="tel:0653209296"><Phone className="mr-2 h-4 w-4" /> 06 53 20 92 96</a></Button><Button asChild size="lg" variant="outline" className="rounded-2xl border-white/30 text-white hover:bg-white/10"><a href="mailto:john@hoveniersbedrijfjohnklaassen.nl"><Mail className="mr-2 h-4 w-4" /> Mail ons</a></Button></div></div><div className="bg-white/10 p-8 md:p-12"><div className="rounded-[2rem] bg-white p-7 text-stone-950 shadow-xl"><h3 className="mb-6 text-2xl font-black">Hoveniersbedrijf John Klaassen</h3><div className="space-y-5 text-stone-700"><p className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-green-800" /> Vossenberg 11<br />5126 PE Gilze</p><p className="flex items-center gap-3"><Phone className="h-5 w-5 text-green-800" /> 06 53 20 92 96</p><p className="flex items-center gap-3"><Mail className="h-5 w-5 text-green-800" /> john@hoveniersbedrijfjohnklaassen.nl</p><p className="text-sm text-stone-500">Fax: 013 508 12 36</p></div></div></div></div></div></section>
      </main>
    </div>
  );
}
