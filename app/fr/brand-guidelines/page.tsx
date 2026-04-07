import ScrollReveal from "@/components/ScrollReveal";

const COLORS = [
  { name: "Signal Green", hex: "#2ECC52", usage: "CTAs, surbrillance, logo, etats actifs", dark: false, bg: "bg-[#2ECC52]" },
  { name: "Signal Dark", hex: "#25A844", usage: "Etats survol, boutons presses", dark: false, bg: "bg-[#25A844]" },
  { name: "Graphite", hex: "#1A1D23", usage: "Sections sombres, hero, pied de page", dark: true, bg: "bg-[#1A1D23]" },
  { name: "Steel", hex: "#252830", usage: "Cartes sur fonds sombres", dark: true, bg: "bg-[#252830]" },
  { name: "Workshop White", hex: "#F7F7F5", usage: "Arriere-plans de page, sections claires", dark: false, bg: "bg-[#F7F7F5]" },
  { name: "Concrete", hex: "#EDEDEB", usage: "Sections alternees, remplissages de cartes", dark: false, bg: "bg-[#EDEDEB]" },
  { name: "Shop Grey", hex: "#5A5D66", usage: "Texte courant sur clair", dark: true, bg: "bg-[#5A5D66]" },
  { name: "Dust", hex: "#8A8D94", usage: "Libelles, legendes, metadonnees", dark: true, bg: "bg-[#8A8D94]" },
  { name: "Steel Light", hex: "#9A9DA6", usage: "Texte courant sur fonds sombres", dark: true, bg: "bg-[#9A9DA6]" },
];

const VOICE_DOS = [
  { do: '"Votre Mazak jette des alarmes? J\'ai deja vu ca."', dont: '"Notre equipe d\'experts met a profit des decennies d\'experience..."' },
  { do: '"Voici le probleme et combien ca coute."', dont: '"Nous offrons des solutions rentables adaptees a vos besoins."' },
  { do: '"20 ans a reparer des machines CNC."', dont: '"Deux decennies d\'excellence de service de pointe."' },
  { do: '"Appelez maintenant. Reponse le meme jour."', dont: '"Contactez-nous pour discuter de la facon dont nous pouvons optimiser vos operations."' },
  { do: '"Independant. Aucun biais de marque."', dont: '"Nous sommes un fournisseur de solutions agnostique."' },
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
          <p className="mt-4 text-steel-light text-lg">AVI Industriel Inc. &mdash; Prepare par EMBI Studio, avril 2026</p>
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
                &laquo;&nbsp;Pour les manufacturiers du Grand Montreal dont les machines CNC sont en panne, AVI Industriel est le specialiste electromecanicien independant qui diagnostique et repare le probleme rapidement — parce que 20 ans d'experience sur 9 marques majeures signifie qu'Alexandre a deja vu votre probleme exact.&nbsp;&raquo;
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-machine-black mb-2">Ce que nous possedons</h3>
                <p className="text-sm text-shop-grey leading-relaxed">Le territoire de &laquo;&nbsp;l'expert independant qui a tout vu&nbsp;&raquo;. Pas un concessionnaire. Pas un OEM. Pas une grande entreprise de service. Un technicien certifie avec deux decennies d'experience terrain.</p>
              </div>
              <div>
                <h3 className="font-semibold text-machine-black mb-2">Slogan</h3>
                <p className="font-mono text-2xl font-bold text-signal">Diagnostic. Reparation. En marche.</p>
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
              { title: "Precision", desc: "Nous diagnostiquons les causes profondes, pas les symptomes. Chaque conclusion est appuyee par des tests, des mesures et l'experience. Nous ne devinons pas." },
              { title: "Honnetete", desc: "Nous vous disons exactement ce qui ne va pas, combien ca coute et combien de temps ca prendra. Si vous n'avez pas besoin de la reparation, nous vous le dirons. Nous preferons perdre un contrat que perdre la confiance." },
              { title: "Independance", desc: "Pas lie a aucun fabricant. Nous recommandons ce qui est juste pour la machine, pas ce que nous vendons. Pas de vente de pieces. Pas de biais de marque. Pas de contrat captif." },
              { title: "Urgence", desc: "Production arretee signifie argent perdu. Nous comprenons la pression. Reponse le meme jour dans le Grand Montreal. Pas de chaines de messagerie vocale. Pas de systemes de tickets. Un appel." },
              { title: "Clarte", desc: "Pas de jargon. Pas de rapports de 40 pages quand une phrase suffit. Nous expliquons ce qui s'est passe, pourquoi, et quoi faire ensuite — dans un langage que tout le monde sur le plancher comprend." },
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
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-4">Voix et ton de marque</h2>
            <p className="text-shop-grey text-base mb-10">AVI sonne comme un technicien senior qui briefe un directeur d'usine. Calme, competent, direct. Pas en train de vendre — en train de diagnostiquer.</p>
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
            <h3 className="font-semibold text-machine-black mb-4">Faire et ne pas faire</h3>
            <div className="space-y-3">
              {VOICE_DOS.map((pair, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-3">
                  <div className="bg-signal/5 border border-signal/20 rounded-lg p-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-signal font-semibold block mb-1">Faire</span>
                    <p className="text-sm text-machine-black">{pair.do}</p>
                  </div>
                  <div className="bg-red-50 border border-red-200/30 rounded-lg p-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-red-400 font-semibold block mb-1">Ne pas faire</span>
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
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Titres — Inter ExtraBold / Bold</p>
                <p className="text-5xl font-extrabold tracking-[-0.03em] text-machine-black">Titre principal</p>
                <p className="text-3xl font-bold tracking-tight text-machine-black mt-4">Titre de section</p>
                <p className="text-lg font-semibold text-machine-black mt-4">Titre de carte</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Corps — Inter Regular / Medium</p>
                <p className="text-base text-shop-grey leading-relaxed">Texte courant a 16px. Utilise pour les paragraphes, descriptions et contenu. Interligne 1.6 pour une lecture confortable.</p>
                <p className="text-sm text-shop-grey leading-relaxed mt-4">Petit corps a 14px. Utilise pour les legendes, informations secondaires et textes de support.</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Technique — JetBrains Mono</p>
                <p className="font-mono text-2xl font-bold text-signal">Makino · Mazak · Fanuc</p>
                <p className="font-mono text-base text-shop-grey mt-4">(514) 971-1284</p>
                <p className="font-mono text-xs text-dust mt-4 uppercase tracking-[0.1em]">Libelle de section</p>
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
                <img src="/avi-logo.svg" alt="AVI sur fond sombre" className="h-20 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)" }} />
              </div>
              <div className="bg-white border border-border-light rounded-lg p-12 flex items-center justify-center">
                <img src="/avi-logo.svg" alt="AVI sur fond clair" className="h-20 w-auto" />
              </div>
            </div>
            <div className="space-y-3 text-sm text-shop-grey">
              <p><strong className="text-machine-black">Primaire :</strong> Trait vert sur fond sombre (Graphite)</p>
              <p><strong className="text-machine-black">Secondaire :</strong> Trait sombre sur fond clair</p>
              <p><strong className="text-machine-black">Taille minimum :</strong> 32px de hauteur a l'ecran</p>
              <p><strong className="text-machine-black">Espace de protection :</strong> Egal a la hauteur des traits du &laquo;&nbsp;I&nbsp;&raquo; sur tous les cotes</p>
              <p><strong className="text-machine-black">Ne jamais :</strong> Remplir le logo, le tourner, l'etirer, ajouter des effets ou changer l'epaisseur du trait</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Illustrations */}
      <section className="bg-graphite grid-texture py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-2">07</p>
            <h2 className="text-3xl font-bold tracking-tight text-bright mb-10">Systeme d'illustrations</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Blueprint", usage: "Arriere-plans hero, superpositions sombres", anim: "Pulsation d'opacite (4s)" },
              { name: "CNC Machine", usage: "Sections services", anim: "Flottement lent (8s)" },
              { name: "Gear System", usage: "Differenciateurs, a propos", anim: "Flottement + rotation (6s)" },
              { name: "Crosshair", usage: "Contextes de precision", anim: "Flottement lent" },
              { name: "Circuit Board", usage: "Sections techniques", anim: "Pulsation d'opacite" },
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
          <p className="text-xs text-steel-light/40 mt-6">Toujours en faible opacite (0.05-0.30). Toujours pointer-events-none. Toujours respecter prefers-reduced-motion.</p>
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
              {["20 ans. 9 marques. Un appel.", "Service CNC complet.", "La machine se fiche de la marque. Moi non plus.", "Secteurs de confiance.", "Pourquoi AVI.", "Diagnostic. Reparation. En marche."].map((h) => (
                <div key={h} className="bg-white border border-border-light rounded-lg p-4">
                  <p className="text-sm font-semibold text-machine-black">{h}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h3 className="font-semibold text-machine-black mb-4">Presentations eclair</h3>
            <div className="space-y-4">
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">15 secondes</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&laquo;&nbsp;AVI Industriel — diagnostic et reparation CNC independants a Montreal. 20 ans, 9 marques majeures, reponse le meme jour. Votre machine est en panne, on la remet en marche.&nbsp;&raquo;</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">30 secondes</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&laquo;&nbsp;AVI Industriel est un service electromecanicien independant base dans le Grand Montreal. Alexandre Vachon possede 20 ans d'experience pratique sur Makino, Mazak, Fanuc, Haas, Siemens et plus. Nous sommes specialises en diagnostic CNC, alignement geometrique, depannage electrique et maintenance preventive pour les manufacturiers en aerospatiale, automobile et defense. Reponse le meme jour. Diagnostic honnete. Aucun biais de marque.&nbsp;&raquo;</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">60 secondes</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&laquo;&nbsp;Quand une machine CNC tombe en panne, la production saigne de l'argent. La plupart des manufacturiers attendent des jours pour un technicien OEM qui ne dessert qu'une seule marque. AVI Industriel est different. Alexandre Vachon est un electromecanicien certifie avec 20 ans d'experience sur 9 plateformes CNC majeures. Il est independant — pas de pieces a vendre, pas de fidelite de marque, pas de contrat captif. Juste un diagnostic honnete et une reparation rapide. Reponse le meme jour dans le Grand Montreal, pret a voyager au-dela. Des pannes d'urgence a la maintenance preventive, des inspections pre-achat aux audits de securite — si c'est du CNC, il a deja vu votre probleme exact. Appelez le (514) 971-1284.&nbsp;&raquo;</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Directives de contenu */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">09</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Directives de contenu</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Redaction des descriptions de services</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              <div className="bg-signal/5 border border-signal/20 rounded-lg p-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-signal font-semibold block mb-2">Bon</span>
                <p className="text-sm text-machine-black">&laquo;&nbsp;Derive d'axe apres un impact? On realigne la geometrie sur toutes les plateformes majeures — Makino, Mazak, Haas — et on vous remet en tolerance.&nbsp;&raquo;</p>
              </div>
              <div className="bg-red-50 border border-red-200/30 rounded-lg p-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-red-400 font-semibold block mb-2">Mauvais</span>
                <p className="text-sm text-shop-grey">&laquo;&nbsp;Notre service d'alignement geometrique complet utilise des methodologies diagnostiques avancees pour assurer une performance optimale de la machine.&nbsp;&raquo;</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Langage a eviter</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Solutions", "Exploiter", "Utiliser", "Optimiser", "A la fine pointe", "De classe mondiale", "Equipe d'experts", "Contactez-nous", "Transparent", "Synergie"].map((word) => (
                <span key={word} className="bg-red-50 text-red-400 text-xs px-3 py-1.5 rounded-full border border-red-200/30 line-through">{word}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Medias sociaux */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">10</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Voix medias sociaux</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Mix de contenu Facebook</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {[
                { pct: "40%", label: "Histoires de travail", desc: "Ce qu'on a repare, comment" },
                { pct: "30%", label: "Connaissances", desc: "Conseils, problemes courants" },
                { pct: "20%", label: "Credibilite", desc: "Experience, marques" },
                { pct: "10%", label: "Disponibilite", desc: "Ouvertures de reservation" },
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
            <h3 className="font-semibold text-machine-black mb-4">Regles</h3>
            <div className="space-y-2 text-sm text-shop-grey">
              <p>&bull; Maximum 2 hashtags par publication. Plusieurs publications n'en ont besoin d'aucun.</p>
              <p>&bull; Pas d'emojis dans les publications professionnelles. Un maximum si le ton le justifie.</p>
              <p>&bull; Premiere personne — &laquo;&nbsp;je&nbsp;&raquo; et non &laquo;&nbsp;nous&nbsp;&raquo; ou &laquo;&nbsp;l'equipe&nbsp;&raquo;.</p>
              <p>&bull; Les publications en anglais sont acceptables — Montreal est bilingue.</p>
              <p>&bull; Ecrire comme si on textait un collegue, pas comme si on redigeait une pub.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-graphite py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-steel-light/40 text-xs">Prepare par EMBI Studio &mdash; <a href="https://embi-studio.com" className="text-signal/50 hover:text-signal transition-colors">embi-studio.com</a></p>
        </div>
      </section>
    </main>
  );
}
