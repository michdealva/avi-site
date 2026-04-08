import ScrollReveal from "@/components/ScrollReveal";

const POSTS = [
  { num: 1, week: "Semaine 1", title: "Publication de lancement", lang: "EN", copy: `After 20 years fixing CNC machines, I finally made a website.\n\nI'm Alexandre Vachon, certified electro-mechanic based in Greater Montreal. I've spent two decades diagnosing and repairing CNC machines across aerospace, automotive, and defense.\n\nMakino, Mazak, Fanuc, Haas, Siemens — if your machine is down, I've probably already seen your exact problem.\n\nIndependent. No brand bias. Same-day response.\n\nIf you work in manufacturing and your machines matter, let's connect.\n\n(514) 971-1284\n\n#CNCRepair #Montreal` },
  { num: 2, week: "Semaine 1", title: "Capsule technique — Fanuc Alarme 414", lang: "EN", copy: `Fanuc alarm 414?\n\nBefore you call anyone: check the encoder battery.\n\n90% of the time, it's a dead battery. 5-minute fix. $15 part.\n\nI see shops pay $500+ for an emergency call when the tech shows up and swaps a battery.\n\nSave this post. Check the battery first.\n\n#CNC #Fanuc` },
  { num: 3, week: "Semaine 1", title: "Marque machine — Mazak", lang: "EN", copy: `Mazak machines are built like tanks.\n\nBut the Mazatrol controller has a few quirks that catch people off guard:\n\n→ Tool offset corruption after a power surge — always check your G10 data\n→ Coolant pressure faults that mimic spindle alarms\n→ Battery backup failures that wipe your programs without warning\n\nI've been servicing Mazaks for 15+ years. These are the calls I get every month.\n\nIf your Mazak is acting up, I probably already know what's wrong.\n\n(514) 971-1284` },
  { num: 4, week: "Semaine 2", title: "Histoire de terrain — Collision Makino", lang: "EN", copy: `Got a call last week: "Our Makino is 200 microns out on the X axis after a crash."\n\nAerospace tolerances. 200 microns might as well be 200 miles.\n\nShowed up same day. Full geometry check. Ballbar test. Found the issue — ballscrew compensation table was corrupted from the crash impact.\n\nRewrote the comp values. Re-ran the test. Back in tolerance by end of shift.\n\nThat's what 20 years of seeing the same problems gets you. You stop guessing.` },
  { num: 5, week: "Semaine 2", title: "Conseils de maintenance préventive", lang: "EN", copy: `Your CNC machine needs preventive maintenance twice a year. Minimum.\n\nHere's what most shops skip (and pay for later):\n\n1. Checking ballscrew backlash — 5 minutes, prevents $10K+ in scrap\n2. Cleaning way covers — $50 in labor now vs. $5K in way replacement later\n3. Testing servo drives under load — finds intermittent faults before they become crashes\n4. Verifying geometry — drift happens slowly, tolerance loss sneaks up\n\nThe cheapest repair is the one you prevent.\n\nNeed a PM schedule? Call me. I'll tell you exactly what your machine needs.` },
  { num: 6, week: "Semaine 2", title: "Publication de disponibilité", lang: "EN", copy: `Booking next week for preventive maintenance inspections in the Greater Montreal area.\n\nFull geometry check + electrical + mechanical + written report.\n\nAll brands. All controls. 20 years of experience, one straightforward price.\n\n(514) 971-1284` },
  { num: 7, week: "Semaine 3", title: "15 marques, une approche", lang: "EN", copy: `15 brands. One approach.\n\nMakino. Mazak. Cincinnati. Matsuura. Haas. TOS. Emmegi. Fanuc. Siemens. And more.\n\nThe machine doesn't care what brand it is. Neither do I.\n\nWhen you're independent, you learn them all. No brand loyalty. No dealer agenda. Just: what's wrong, and what's the fastest way to fix it.\n\nThat's what 20 years on the shop floor gives you. Pattern recognition across every platform.` },
  { num: 8, week: "Semaine 3", title: "Histoire de terrain — Haas Servo", lang: "FR", copy: `Appel vendredi soir: "Notre Haas jette des alarmes de servo sur l'axe Z. Production arr\u00eat\u00e9e."\n\nArriv\u00e9 sur place en moins de 2 heures. Diagnostic: connecteur du moteur servo intermittent \u2014 vibration de la machine l'a us\u00e9 avec le temps.\n\nRemplacement, recalibration, test de charge. Machine repartie avant la fin du quart.\n\nDes fois c'est un probl\u00e8me de $50,000. Des fois c'est un connecteur. La diff\u00e9rence c'est le diagnostic.\n\n(514) 971-1284` },
  { num: 9, week: "Semaine 3", title: "Inspection pré-achat", lang: "EN", copy: `Before you buy a used CNC machine:\n\nGet an independent inspection. Not from the dealer. Not from the seller. From someone who has nothing to sell you.\n\nHere's what I check on a pre-purchase inspection:\n\n→ Full geometry (every axis)\n→ Ballbar circularity test\n→ Spindle runout and vibration\n→ Servo drive health\n→ Hydraulic/pneumatic pressure and leak check\n→ Control condition + backup verification\n→ Electrical safety compliance\n\nI've saved clients from buying machines with $30K in hidden repairs.\n\nThe inspection costs a fraction of one bad purchase.` },
  { num: 10, week: "Semaine 4", title: "Marque machine — Fanuc", lang: "EN", copy: `If you run Fanuc controls, bookmark this.\n\nTop 5 alarm codes I see every month and what they actually mean:\n\n1. SV0401 — V ready off (check power supply, not the motor)\n2. SV0418 — Excess error (could be mechanical binding, not a servo issue)\n3. OH0700 — Overheat (clean the fan. Seriously, just clean it.)\n4. SP9045 — Spindle alarm (check the encoder before replacing the drive)\n5. PC000 — Parameter reset (battery died — your programs might be gone)\n\nMost of these have a $50 fix. Don't let anyone quote you $5,000.\n\n#Fanuc #CNC` },
  { num: 11, week: "Semaine 4", title: "Coût des temps d'arrêt", lang: "FR", copy: `Combien co\u00fbte une heure d'arr\u00eat machine?\n\nEn a\u00e9rospatiale: $500-2,000/heure.\nEn automobile: $1,000-5,000/heure.\nEn d\u00e9fense: inestimable (d\u00e9lais de livraison = p\u00e9nalit\u00e9s).\n\nC'est pour \u00e7a que le "on va attendre le technicien du fabricant" n'est pas une strat\u00e9gie.\n\nInd\u00e9pendant. Pas d'agenda. R\u00e9ponse le m\u00eame jour dans le Grand Montr\u00e9al.\n\nAVI Industriel \u2014 (514) 971-1284` },
  { num: 12, week: "Semaine 4", title: "Bilan du mois", lang: "EN", copy: `First month on LinkedIn. Here's what I've learned:\n\nThe manufacturing community here is smaller and more connected than I thought. Had great conversations with plant managers, maintenance leads, and fellow technicians across Quebec.\n\nA few things I'll keep sharing:\n→ Real job stories (what went wrong, how we fixed it)\n→ Quick tips that save you money\n→ Honest takes on machine brands\n\nIf you're in manufacturing and your machines matter — let's connect.\n\nAnd if a machine is down right now: (514) 971-1284. Same-day response, Greater Montreal.` },
];

const KPIS = [
  { metric: "Connexions", d30: "150", d60: "350", d90: "500+" },
  { metric: "Impressions par publication (moy.)", d30: "200\u2013500", d60: "500\u20131 500", d90: "1 000\u20133 000" },
  { metric: "Taux d'engagement", d30: "3\u20135%", d60: "4\u20136%", d90: "5\u20138%" },
  { metric: "Vues de profil/semaine", d30: "30\u201350", d60: "50\u2013100", d90: "100+" },
  { metric: "Messages entrants", d30: "2\u20133", d60: "5\u20138", d90: "8\u201315" },
  { metric: "Prospects (appels/devis)", d30: "1\u20132", d60: "3\u20135", d90: "5\u201310" },
];

export default function LinkedInStrategyFR() {
  return (
    <main>
      {/* Header */}
      <section className="bg-graphite grid-texture pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <img src="/avi-logo.svg" alt="AVI" className="mx-auto h-16 md:h-20 w-auto mb-8" style={{ filter: "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)" }} />
          <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-6xl">Stratégie de lancement LinkedIn</h1>
          <p className="mt-4 text-steel-light text-lg">AVI Industriel Inc. &mdash; Premiers 30 jours</p>
        </div>
      </section>

      {/* 1. Configuration du profil */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">01</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">Configuration du profil</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <div className="bg-white border border-border-light rounded-lg p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">Titre</p>
                <p className="font-semibold text-machine-black">CNC Diagnostics &amp; Repair | 20 Years | Makino &middot; Mazak &middot; Fanuc &middot; Haas &middot; Siemens | Greater Montreal</p>
              </div>

              <div className="bg-white border border-border-light rounded-lg p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-3">Section À propos</p>
                <div className="text-sm text-shop-grey leading-relaxed whitespace-pre-line">{`I fix CNC machines. That's it. That's the job.

20 years as a certified electro-mechanic. 15 major CNC brands. Aerospace, automotive, defense, plastics — if it has a spindle and a control, I've worked on it.

I started investigating defects on aerospace parts and identifying root causes. That diagnostic mindset never left. When your machine throws an alarm at 6am and the OEM can't come for three weeks, I'm the call you make.

What I do:
→ CNC geometry & alignment
→ Electrical troubleshooting (intermittent faults, drive failures, servo issues)
→ Mechanical, pneumatic, hydraulic systems
→ Preventive maintenance programs
→ Pre-purchase machine inspections
→ Safety audits & CSA modifications

Brands: Makino, Mazak, Cincinnati, Matsuura, Haas, TOS, Emmegi, Fanuc, Siemens, and more.

Independent. No brand bias. No parts to sell. Just honest diagnosis and fast repair.

Based in Greater Montreal. Ready to travel.

Machine down? Call me: (514) 971-1284`}</div>
              </div>

              <div className="bg-white border border-border-light rounded-lg p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">Description de la page entreprise</p>
                <p className="text-sm text-shop-grey leading-relaxed">AVI Industriel Inc. — Independent CNC diagnostics and repair. 20 years of hands-on experience across 15 major CNC platforms. Serving aerospace, automotive, defense, and manufacturing in Greater Montreal. Your machine is down. We get it running. (514) 971-1284</p>
              </div>

              <div className="bg-white border border-border-light rounded-lg p-6">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">Image de bannière</p>
                <p className="text-sm text-shop-grey">Fond graphite foncé avec logo AVI (contour vert) centré. Texte : &laquo;&nbsp;Diagnostic. Réparation. En marche.&nbsp;&raquo; en Inter bold. Correspond à l'esthétique du site web.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Calendrier de contenu */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">02</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-4">Calendrier de contenu</h2>
            <p className="text-shop-grey text-sm mb-8">3 publications par semaine &mdash; mardi, jeudi, samedi</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-light">
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Semaine</th>
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Mardi</th>
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Jeudi</th>
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Samedi</th>
                  </tr>
                </thead>
                <tbody className="text-shop-grey">
                  <tr className="border-b border-border-light"><td className="py-3 px-4 font-mono text-signal">1</td><td className="py-3 px-4">Publication de lancement</td><td className="py-3 px-4">Capsule technique #1</td><td className="py-3 px-4">Marque machine : Mazak</td></tr>
                  <tr className="border-b border-border-light"><td className="py-3 px-4 font-mono text-signal">2</td><td className="py-3 px-4">Histoire de terrain #1</td><td className="py-3 px-4">Capsule technique #2</td><td className="py-3 px-4">Disponibilité</td></tr>
                  <tr className="border-b border-border-light"><td className="py-3 px-4 font-mono text-signal">3</td><td className="py-3 px-4">Publication de crédibilité</td><td className="py-3 px-4">Histoire de terrain #2 (FR)</td><td className="py-3 px-4">Capsule technique #3</td></tr>
                  <tr><td className="py-3 px-4 font-mono text-signal">4</td><td className="py-3 px-4">Marque machine : Fanuc</td><td className="py-3 px-4">Capsule technique (FR)</td><td className="py-3 px-4">Bilan du mois</td></tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Publications prêtes à publier */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">03</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">12 publications prêtes à publier</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {POSTS.map((post, i) => (
              <ScrollReveal key={post.num} delay={i * 40}>
                <div className="bg-white border border-border-light rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-signal text-xs font-bold">#{String(post.num).padStart(2, "0")}</span>
                    <span className="text-xs text-dust">{post.week}</span>
                    <span className={`text-[10px] uppercase tracking-[0.1em] font-semibold px-2 py-0.5 rounded ${post.lang === "FR" ? "bg-blue-50 text-blue-500" : "bg-concrete text-dust"}`}>{post.lang}</span>
                  </div>
                  <h3 className="font-semibold text-machine-black text-sm mb-3">{post.title}</h3>
                  <p className="text-sm text-shop-grey leading-relaxed whitespace-pre-line">{post.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Modèles de contenu */}
      <section className="bg-graphite grid-texture py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-2">04</p>
            <h2 className="text-3xl font-bold tracking-tight text-bright mb-8">Modèles de contenu</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { title: "Travail complété", template: "[Énoncé du problème — une phrase, spécifique]\n\n[Comment on l'a trouvé — approche diagnostique, 2-3 phrases]\n\n[La solution — ce qu'on a fait, en combien de temps]\n\n[Conclusion — le pattern ou la leçon]\n\n(514) 971-1284" },
              { title: "Capsule technique", template: "[Accroche — fait surprenant ou erreur courante]\n\n[La liste — 3-5 éléments spécifiques et actionnables]\n\n[Conclusion — pourquoi c'est important / ce que ça sauve]\n\n[CTA souple — \"Questions? (514) 971-1284\"]" },
              { title: "Marque machine", template: "[Nom de la marque + opinion forte ou fait]\n\n[3-5 observations spécifiques tirées de l'expérience]\n\n[Fermeture — \"Je répare des [marque] depuis X ans. Si la vôtre agit mal, je sais probablement déjà ce qui ne va pas.\"]\n\n(514) 971-1284" },
              { title: "Disponibilité", template: "[Fenêtre de réservation — semaine prochaine, ce mois-ci]\n\n[Ce qu'on offre — service spécifique]\n\n[Portée — marques, ce qui est inclus]\n\n[Une ligne — cadrage de prix ou \"tarification directe\"]\n\n(514) 971-1284" },
            ].map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 60}>
                <div className="bg-steel border border-border-dark rounded-lg p-6">
                  <h3 className="font-semibold text-bright text-sm mb-3">{t.title}</h3>
                  <pre className="text-xs text-steel-light leading-relaxed whitespace-pre-line font-mono">{t.template}</pre>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stratégie d'engagement */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">05</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">Stratégie d'engagement</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Avec qui se connecter</h3>
            <div className="space-y-3 mb-10">
              {[
                { priority: "1", titles: "Directeur d'usine, Gestionnaire de maintenance, Superviseur de maintenance", why: "Ce sont eux qui approuvent les contrats de service" },
                { priority: "2", titles: "Opérateur CNC, Technicien de machines", why: "Ils recommandent les fournisseurs aux gestionnaires" },
                { priority: "3", titles: "Gestionnaire des achats, Spécialiste en approvisionnement", why: "Ils évaluent et négocient" },
                { priority: "4", titles: "Techniciens indépendants, outilleurs-ajusteurs", why: "Réseau de références" },
              ].map((row) => (
                <div key={row.priority} className="bg-white border border-border-light rounded-lg p-4 flex gap-4">
                  <span className="font-mono text-signal text-lg font-bold flex-shrink-0 w-6">{row.priority}</span>
                  <div>
                    <p className="text-sm font-semibold text-machine-black">{row.titles}</p>
                    <p className="text-xs text-dust mt-1">{row.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Groupes à rejoindre</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {["CNC Machining & Programming", "Montreal Manufacturing Network", "Canadian Manufacturing", "Aerospace Manufacturing Professionals", "Maintenance and Reliability Professionals"].map((g) => (
                <span key={g} className="text-xs px-3 py-1.5 rounded-full border border-border-light text-shop-grey bg-white">{g}</span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h3 className="font-semibold text-machine-black mb-4">Demande de connexion</h3>
            <div className="bg-white border border-border-light rounded-lg p-4">
              <p className="text-sm text-shop-grey italic">&laquo;&nbsp;Bonjour [nom] — je suis un technicien CNC indépendant à Montréal (20 ans, Makino/Mazak/Fanuc/Haas/Siemens). Je me connecte avec les professionnels du manufacturier dans la région. Au plaisir d'échanger.&nbsp;&raquo;</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Indicateurs de performance */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">06</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">Indicateurs de performance — Premiers 90 jours</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-light">
                    <th className="text-left py-3 px-4 font-semibold text-machine-black">Métrique</th>
                    <th className="text-center py-3 px-4 font-semibold text-machine-black">30 jours</th>
                    <th className="text-center py-3 px-4 font-semibold text-machine-black">60 jours</th>
                    <th className="text-center py-3 px-4 font-semibold text-machine-black">90 jours</th>
                  </tr>
                </thead>
                <tbody>
                  {KPIS.map((row) => (
                    <tr key={row.metric} className="border-b border-border-light">
                      <td className="py-3 px-4 text-shop-grey">{row.metric}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm text-machine-black">{row.d30}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm text-machine-black">{row.d60}</td>
                      <td className="py-3 px-4 text-center font-mono text-sm text-signal font-semibold">{row.d90}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white border border-border-light rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-machine-black mb-2">À quoi ressemble le succès</h3>
              <p className="text-sm text-shop-grey leading-relaxed">Alexandre est reconnu dans la communauté manufacturière LinkedIn de Montréal comme le gars CNC indépendant. Quand la machine de quelqu'un tombe en panne, soit ils ont vu ses publications, soit quelqu'un dans leur réseau le mentionne. Un seul travail de réparation d'urgence à 5 000$+ provenant d'une connexion LinkedIn rembourse 6 mois d'effort de publication.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-graphite py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-steel-light/40 text-xs">Préparé par EMBI Studio &mdash; <a href="https://embi-studio.com" className="text-signal/50 hover:text-signal transition-colors">embi-studio.com</a></p>
        </div>
      </section>
    </main>
  );
}
