import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Guide de marque | AVI Industriel",
  description:
    "Guide de marque AVI Industriel : positionnement, voix, palette de couleurs, typographie, logo et normes de contenu.",
};

const COLORS = [
  { name: "Signal Green", hex: "#2ECC52", usage: "CTA, surbrillance, logo, états actifs", dark: false, bg: "bg-[#2ECC52]" },
  { name: "Signal Dark", hex: "#25A844", usage: "États de survol, boutons enfoncés", dark: false, bg: "bg-[#25A844]" },
  { name: "Graphite", hex: "#1A1D23", usage: "Sections foncées, hero, pied de page", dark: true, bg: "bg-[#1A1D23]" },
  { name: "Steel", hex: "#252830", usage: "Cartes sur fonds foncés", dark: true, bg: "bg-[#252830]" },
  { name: "Workshop White", hex: "#F7F7F5", usage: "Arrière-plans de page, sections claires", dark: false, bg: "bg-[#F7F7F5]" },
  { name: "Concrete", hex: "#EDEDEB", usage: "Sections alternées, remplissages de cartes", dark: false, bg: "bg-[#EDEDEB]" },
  { name: "Shop Grey", hex: "#5A5D66", usage: "Texte courant sur fond clair", dark: true, bg: "bg-[#5A5D66]" },
  { name: "Dust", hex: "#8A8D94", usage: "Libellés, légendes, métadonnées", dark: true, bg: "bg-[#8A8D94]" },
  { name: "Steel Light", hex: "#9A9DA6", usage: "Texte courant sur fonds foncés", dark: true, bg: "bg-[#9A9DA6]" },
];

const VOICE_DOS = [
  { do: '"Votre Mazak jette des alarmes? J\'ai déjà vu ça."', dont: '"Notre équipe d\'experts met à profit des décennies d\'expérience..."' },
  { do: '"Voici le problème et combien ça coûte."', dont: '"Nous offrons des solutions rentables adaptées à vos besoins."' },
  { do: '"20 ans à réparer des machines CNC."', dont: '"Deux décennies d\'excellence de service à la fine pointe."' },
  { do: '"Appelez maintenant. Réponse le même jour."', dont: '"Contactez-nous pour discuter de la façon dont nous pouvons optimiser vos opérations."' },
  { do: '"Indépendant. Aucun biais de marque."', dont: '"Nous sommes un fournisseur de solutions agnostique."' },
  { do: '"La machine se fiche de la marque. Moi non plus."', dont: '"Notre expertise multiplateforme permet un support transparent entre fabricants."' },
];

export default function BrandGuidelinesFR() {
  return (
    <main>
      {/* Header */}
      <section className="bg-graphite grid-texture pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <img
            src="/avi-logo.svg"
            alt="AVI Industriel"
            className="mx-auto h-16 md:h-24 w-auto mb-8"
            style={{ filter: "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)" }}
          />
          <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-6xl">Guide de marque</h1>
          <p className="mt-4 text-steel-light text-lg">AVI Industriel Inc. | Préparé par EMBI Studio, avril 2026</p>
        </div>
      </section>

      {/* 1. Positionnement */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">01</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">Positionnement de marque</h2>
            <div className="bg-white border border-border-light rounded-lg p-8 mb-8">
              <p className="text-lg leading-relaxed text-machine-black italic">
                &laquo;&nbsp;Pour les manufacturiers du Grand Montréal dont les machines CNC sont en panne, AVI Industriel est le spécialiste électromécanique indépendant qui diagnostique et répare rapidement, parce que 20 ans sur 15 marques majeures veut dire qu'Alexandre a déjà vu votre problème exact.&nbsp;&raquo;
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-machine-black mb-2">Ce qu'on occupe comme territoire</h3>
                <p className="text-sm text-shop-grey leading-relaxed">Le territoire de &laquo;&nbsp;l'expert indépendant qui a tout vu&nbsp;&raquo;. Pas un concessionnaire. Pas un OEM. Pas une grosse boîte de service. Un technicien certifié avec vingt ans d'expérience terrain.</p>
              </div>
              <div>
                <h3 className="font-semibold text-machine-black mb-2">Slogan</h3>
                <p className="font-mono text-2xl font-bold text-signal">Diagnostic. Réparation. En marche.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Valeurs de marque */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">02</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Valeurs de marque</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { title: "Précision", desc: "On diagnostique les causes profondes, pas les symptômes. Chaque conclusion est appuyée par des tests, des mesures et l'expérience. On ne devine pas." },
              { title: "Honnêteté", desc: "On vous dit exactement ce qui ne va pas, combien ça coûte et combien de temps ça va prendre. Si vous n'avez pas besoin de la réparation, on va vous le dire. On préfère perdre un contrat que perdre la confiance." },
              { title: "Indépendance", desc: "Pas lié à aucun fabricant. On recommande ce qui est bon pour la machine, pas ce qu'on vend. Pas de vente de pièces. Pas de biais de marque. Pas de contrat captif." },
              { title: "Urgence", desc: "Production arrêtée, ça veut dire de l'argent perdu. On comprend la pression. Réponse le même jour dans le Grand Montréal. Pas de chaînes de messagerie vocale. Pas de systèmes de tickets. Un appel." },
              { title: "Clarté", desc: "Pas de jargon. Pas de rapports de 40 pages quand une phrase suffit. On explique ce qui s'est passé, pourquoi, et quoi faire ensuite, dans un langage que tout le monde sur le plancher comprend." },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 60}>
                <div className="bg-white border border-border-light rounded-lg p-6 flex gap-4">
                  <span className="font-mono text-signal text-xl font-bold flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-lg text-machine-black">{v.title}</h3>
                    <p className="text-sm text-shop-grey leading-relaxed mt-1">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Voix et ton */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">03</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-4">Voix et ton</h2>
            <p className="text-shop-grey text-base mb-10">AVI sonne comme un technicien sénior qui briefe un directeur d'usine. Calme, compétent, direct. Pas en train de vendre. En train de diagnostiquer.</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Attributs de voix</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {["Direct", "Confiant", "Technique mais accessible", "Humain"].map((attr) => (
                <div key={attr} className="bg-white border border-border-light rounded-lg p-4 text-center">
                  <span className="text-sm font-semibold text-machine-black">{attr}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">À faire et à éviter</h3>
            <div className="space-y-3">
              {VOICE_DOS.map((pair, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-3">
                  <div className="bg-signal/5 border border-signal/20 rounded-lg p-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-signal font-semibold block mb-1">À faire</span>
                    <p className="text-sm text-machine-black">{pair.do}</p>
                  </div>
                  <div className="bg-red-50 border border-red-200/30 rounded-lg p-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-red-400 font-semibold block mb-1">À éviter</span>
                    <p className="text-sm text-shop-grey">{pair.dont}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Couleurs */}
      <section className="bg-graphite grid-texture py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-2">04</p>
            <h2 className="text-3xl font-bold tracking-tight text-bright mb-10">Palette de couleurs</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {COLORS.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 40}>
                <div className="bg-steel border border-border-dark rounded-lg overflow-hidden">
                  <div className={`h-20 ${c.bg}`} />
                  <div className="p-4">
                    <p className="font-semibold text-sm text-bright">{c.name}</p>
                    <p className="font-mono text-xs text-steel-light mt-1">{c.hex}</p>
                    <p className="text-xs text-steel-light/60 mt-1">{c.usage}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Typographie */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">05</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Typographie</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div className="bg-white border border-border-light rounded-lg p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Titres : Inter ExtraBold / Bold</p>
                <p className="text-5xl font-extrabold tracking-[-0.03em] text-machine-black">Titre principal</p>
                <p className="text-3xl font-bold tracking-tight text-machine-black mt-4">Titre de section</p>
                <p className="text-lg font-semibold text-machine-black mt-4">Titre de carte</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Corps : Inter Regular / Medium</p>
                <p className="text-base text-shop-grey leading-relaxed">Texte courant à 16px. Utilisé pour les paragraphes, descriptions et contenu général. Interligne 1.6 pour une lecture confortable.</p>
                <p className="text-sm text-shop-grey leading-relaxed mt-4">Petit corps à 14px. Utilisé pour les légendes, informations secondaires et textes de support.</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Technique : JetBrains Mono</p>
                <p className="font-mono text-2xl font-bold text-signal">Makino · Mazak · Fanuc</p>
                <p className="font-mono text-base text-shop-grey mt-4">(514) 971-1284</p>
                <p className="font-mono text-xs text-dust mt-4 uppercase tracking-[0.1em]">Libellé de section</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Logo */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">06</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Logo</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-graphite rounded-lg p-12 flex items-center justify-center">
                <img src="/avi-logo.svg" alt="AVI sur fond foncé" className="h-20 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)" }} />
              </div>
              <div className="bg-white border border-border-light rounded-lg p-12 flex items-center justify-center">
                <img src="/avi-logo.svg" alt="AVI sur fond clair" className="h-20 w-auto" />
              </div>
            </div>
            <div className="space-y-3 text-sm text-shop-grey">
              <p><strong className="text-machine-black">Primaire :</strong> Trait vert sur fond foncé (Graphite)</p>
              <p><strong className="text-machine-black">Secondaire :</strong> Trait foncé sur fond clair</p>
              <p><strong className="text-machine-black">Taille minimum :</strong> 32px de hauteur à l'écran</p>
              <p><strong className="text-machine-black">Espace de protection :</strong> Égal à la hauteur des traits du &laquo;&nbsp;I&nbsp;&raquo; sur tous les côtés</p>
              <p><strong className="text-machine-black">Ne jamais :</strong> Remplir le logo, le tourner, l'étirer, ajouter des effets ou changer l'épaisseur du trait</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Illustrations */}
      <section className="bg-graphite grid-texture py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-2">07</p>
            <h2 className="text-3xl font-bold tracking-tight text-bright mb-10">Système d'illustrations</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Blueprint", usage: "Arrière-plans hero, superpositions foncées", anim: "Pulsation d'opacité (4s)" },
              { name: "CNC Machine", usage: "Sections services", anim: "Flottement lent (8s)" },
              { name: "Gear System", usage: "Différenciateurs, à propos", anim: "Flottement + rotation (6s)" },
              { name: "Crosshair", usage: "Contextes de précision", anim: "Flottement lent" },
              { name: "Circuit Board", usage: "Sections techniques", anim: "Pulsation d'opacité" },
            ].map((ill, i) => (
              <ScrollReveal key={ill.name} delay={i * 60}>
                <div className="bg-steel border border-border-dark rounded-lg p-6">
                  <p className="font-semibold text-bright text-sm">{ill.name}</p>
                  <p className="text-xs text-steel-light mt-1">{ill.usage}</p>
                  <p className="text-xs text-signal/60 mt-1 font-mono">{ill.anim}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-xs text-steel-light/40 mt-6">Toujours en faible opacité (0.05–0.30). Toujours pointer-events-none. Toujours respecter prefers-reduced-motion.</p>
        </div>
      </section>

      {/* 8. Cadre de messagerie */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">08</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Cadre de messagerie</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-graphite rounded-lg p-8 mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-3">Titre principal</p>
              <p className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-bright">Votre CNC est en panne.<br />On la remet en marche.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Titres secondaires</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-10">
              {["20 ans. 15 marques. Un appel.", "Service CNC complet.", "La machine se fiche de la marque. Moi non plus.", "Secteurs de confiance.", "Pourquoi AVI.", "Diagnostic. Réparation. En marche."].map((h) => (
                <div key={h} className="bg-white border border-border-light rounded-lg p-4">
                  <p className="text-sm font-semibold text-machine-black">{h}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h3 className="font-semibold text-machine-black mb-4">Présentations éclair</h3>
            <div className="space-y-4">
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">15 secondes</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&laquo;&nbsp;AVI Industriel : diagnostic et réparation CNC indépendants à Montréal. 20 ans, 15 marques majeures, réponse le même jour. Votre machine est en panne, on la remet en marche.&nbsp;&raquo;</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">30 secondes</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&laquo;&nbsp;AVI Industriel est un service d'électromécanique indépendant basé dans le Grand Montréal. Alexandre Vachon possède 20 ans d'expérience terrain sur Makino, Mazak, Fanuc, Haas, Siemens et plus. On se spécialise en diagnostic CNC, alignement géométrique, dépannage électrique et maintenance préventive pour les manufacturiers en aérospatiale, automobile et défense. Réponse le même jour. Diagnostic honnête. Aucun biais de marque.&nbsp;&raquo;</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">60 secondes</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&laquo;&nbsp;Quand une machine CNC tombe en panne, la production saigne de l'argent. La plupart des manufacturiers attendent des jours pour un technicien OEM qui ne dessert qu'une seule marque. AVI Industriel, c'est différent. Alexandre Vachon est un électromécanicien certifié avec 20 ans d'expérience sur 15 plateformes CNC majeures. Il est indépendant : pas de pièces à vendre, pas de fidélité de marque, pas de contrat captif. Juste un diagnostic honnête et une réparation rapide. Réponse le même jour dans le Grand Montréal, prêt à se déplacer au-delà. Des pannes d'urgence à la maintenance préventive, des inspections pré-achat aux audits de sécurité : si c'est du CNC, il a déjà vu votre problème exact. Appelez le (514) 971-1284.&nbsp;&raquo;</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Lignes directrices de contenu */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">09</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Lignes directrices de contenu</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Rédaction des descriptions de services</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              <div className="bg-signal/5 border border-signal/20 rounded-lg p-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-signal font-semibold block mb-2">Bon</span>
                <p className="text-sm text-machine-black">&laquo;&nbsp;Dérive d'axe après un impact? On réaligne la géométrie sur toutes les plateformes majeures (Makino, Mazak, Haas) et on vous remet en tolérance.&nbsp;&raquo;</p>
              </div>
              <div className="bg-red-50 border border-red-200/30 rounded-lg p-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-red-400 font-semibold block mb-2">Mauvais</span>
                <p className="text-sm text-shop-grey">&laquo;&nbsp;Notre service d'alignement géométrique complet utilise des méthodologies diagnostiques avancées pour assurer une performance optimale de la machine.&nbsp;&raquo;</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Langage à éviter</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Solutions", "Exploiter", "Utiliser", "Optimiser", "À la fine pointe", "De classe mondiale", "Équipe d'experts", "Contactez-nous", "Transparent", "Synergie"].map((word) => (
                <span key={word} className="bg-red-50 text-red-400 text-xs px-3 py-1.5 rounded-full border border-red-200/30 line-through">{word}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Voix sur les réseaux sociaux */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">10</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Voix sur les réseaux sociaux</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Mix de contenu Facebook</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {[
                { pct: "40%", label: "Histoires de terrain", desc: "Ce qu'on a réparé, comment" },
                { pct: "30%", label: "Connaissances", desc: "Conseils, problèmes courants" },
                { pct: "20%", label: "Crédibilité", desc: "Expérience, marques" },
                { pct: "10%", label: "Disponibilité", desc: "Ouvertures de réservation" },
              ].map((p) => (
                <div key={p.label} className="bg-white border border-border-light rounded-lg p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-signal">{p.pct}</p>
                  <p className="text-sm font-semibold text-machine-black mt-1">{p.label}</p>
                  <p className="text-xs text-dust mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Règles</h3>
            <div className="space-y-2 text-sm text-shop-grey">
              <p>&bull; Maximum 2 hashtags par publication. Plusieurs publications n'en ont pas besoin du tout.</p>
              <p>&bull; Pas d'émojis dans les publications professionnelles. Un maximum si le ton le justifie.</p>
              <p>&bull; Première personne : &laquo;&nbsp;je&nbsp;&raquo; et non &laquo;&nbsp;nous&nbsp;&raquo; ou &laquo;&nbsp;l'équipe&nbsp;&raquo;.</p>
              <p>&bull; Les publications en anglais sont acceptables. Montréal est bilingue.</p>
              <p>&bull; Écrire comme si on textait un collègue, pas comme si on rédigeait une pub.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-graphite py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-steel-light/40 text-xs">Préparé par EMBI Studio | <a href="https://embi-studio.com" className="text-signal/50 hover:text-signal transition-colors">embi-studio.com</a></p>
        </div>
      </section>
    </main>
  );
}
