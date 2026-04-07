import ScrollReveal from "@/components/ScrollReveal";

const COLORS = [
  { name: "Signal Green", hex: "#2ECC52", usage: "CTAs, highlights, logo, active states", dark: false, bg: "bg-[#2ECC52]" },
  { name: "Signal Dark", hex: "#25A844", usage: "Hover states, pressed buttons", dark: false, bg: "bg-[#25A844]" },
  { name: "Graphite", hex: "#1A1D23", usage: "Dark sections, hero, footer", dark: true, bg: "bg-[#1A1D23]" },
  { name: "Steel", hex: "#252830", usage: "Cards on dark backgrounds", dark: true, bg: "bg-[#252830]" },
  { name: "Workshop White", hex: "#F7F7F5", usage: "Page backgrounds, light sections", dark: false, bg: "bg-[#F7F7F5]" },
  { name: "Concrete", hex: "#EDEDEB", usage: "Alternate sections, card fills", dark: false, bg: "bg-[#EDEDEB]" },
  { name: "Shop Grey", hex: "#5A5D66", usage: "Body text on light", dark: true, bg: "bg-[#5A5D66]" },
  { name: "Dust", hex: "#8A8D94", usage: "Labels, captions, metadata", dark: true, bg: "bg-[#8A8D94]" },
  { name: "Steel Light", hex: "#9A9DA6", usage: "Body text on dark backgrounds", dark: true, bg: "bg-[#9A9DA6]" },
];

const VOICE_DOS = [
  { do: '"Your Mazak is throwing alarms? I\'ve seen this before."', dont: '"Our team of experts leverages decades of experience..."' },
  { do: '"Here\'s what\'s wrong and what it\'ll cost."', dont: '"We provide cost-effective solutions tailored to your needs."' },
  { do: '"20 years fixing CNC machines."', dont: '"Two decades of industry-leading service excellence."' },
  { do: '"Call now. We respond same day."', dont: '"Reach out to discuss how we can help optimize your operations."' },
  { do: '"Independent. No brand bias."', dont: '"We are a vendor-agnostic solutions provider."' },
  { do: '"The machine doesn\'t care what brand it is. Neither do we."', dont: '"Our multi-platform expertise enables seamless cross-manufacturer support."' },
];

export default function BrandGuidelines() {
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
          <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-6xl">Brand Guidelines</h1>
          <p className="mt-4 text-steel-light text-lg">AVI Industriel Inc. &mdash; Prepared by EMBI Studio, April 2026</p>
        </div>
      </section>

      {/* 1. Positioning */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">01</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-8">Brand Positioning</h2>
            <div className="bg-white border border-border-light rounded-lg p-8 mb-8">
              <p className="text-lg leading-relaxed text-machine-black italic">
                &ldquo;For manufacturers in Greater Montreal whose CNC machines are down, AVI Industriel is the independent electromechanical specialist who diagnoses and fixes the problem fast &mdash; because 20 years across 9 major brands means Alexandre has already seen your exact issue before.&rdquo;
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-machine-black mb-2">What we own</h3>
                <p className="text-sm text-shop-grey leading-relaxed">The &ldquo;independent expert who&rsquo;s seen it all&rdquo; territory. Not a dealer. Not an OEM. Not a large service company. One certified technician with two decades of hands-on experience.</p>
              </div>
              <div>
                <h3 className="font-semibold text-machine-black mb-2">Tagline</h3>
                <p className="font-mono text-2xl font-bold text-signal">Diagnostic. Repair. Running.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Brand Values */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">02</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Brand Values</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { title: "Precision", desc: "We diagnose root causes, not symptoms. Every conclusion is backed by testing, measurement, and experience. We don't guess." },
              { title: "Honesty", desc: "We tell you exactly what's wrong, what it costs, and how long it takes. If you don't need the repair, we'll say so. We'd rather lose a job than lose trust." },
              { title: "Independence", desc: "Not tied to any manufacturer. We recommend what's right for the machine, not what we sell. No parts upsell. No brand bias. No contract lock-in." },
              { title: "Urgency", desc: "Production stopped means money lost. We understand the pressure. Same-day response in Greater Montreal. No voicemail chains. No ticket systems. One call." },
              { title: "Clarity", desc: "No jargon dumping. No 40-page reports when a sentence will do. We explain what happened, why, and what to do next — in language anyone on the floor can understand." },
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

      {/* 3. Voice & Tone */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">03</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-4">Brand Voice &amp; Tone</h2>
            <p className="text-shop-grey text-base mb-10">AVI sounds like a senior technician briefing a plant manager. Calm, competent, direct. Not selling &mdash; diagnosing.</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Voice Attributes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {["Direct", "Confident", "Technical but accessible", "Human"].map((attr) => (
                <div key={attr} className="bg-white border border-border-light rounded-lg p-4 text-center">
                  <span className="text-sm font-semibold text-machine-black">{attr}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Do &amp; Don&rsquo;t</h3>
            <div className="space-y-3">
              {VOICE_DOS.map((pair, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-3">
                  <div className="bg-signal/5 border border-signal/20 rounded-lg p-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-signal font-semibold block mb-1">Do</span>
                    <p className="text-sm text-machine-black">{pair.do}</p>
                  </div>
                  <div className="bg-red-50 border border-red-200/30 rounded-lg p-4">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-red-400 font-semibold block mb-1">Don&rsquo;t</span>
                    <p className="text-sm text-shop-grey">{pair.dont}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Colors */}
      <section className="bg-graphite grid-texture py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-2">04</p>
            <h2 className="text-3xl font-bold tracking-tight text-bright mb-10">Color Palette</h2>
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

      {/* 5. Typography */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">05</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Typography</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <div className="bg-white border border-border-light rounded-lg p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Headings — Inter ExtraBold / Bold</p>
                <p className="text-5xl font-extrabold tracking-[-0.03em] text-machine-black">Hero Headline</p>
                <p className="text-3xl font-bold tracking-tight text-machine-black mt-4">Section Heading</p>
                <p className="text-lg font-semibold text-machine-black mt-4">Card Title</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Body — Inter Regular / Medium</p>
                <p className="text-base text-shop-grey leading-relaxed">Body text at 16px. Used for paragraphs, descriptions, and content. Line-height 1.6 for comfortable reading.</p>
                <p className="text-sm text-shop-grey leading-relaxed mt-4">Small body at 14px. Used for captions, secondary info, and supporting text.</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-8">
                <p className="text-xs uppercase tracking-[0.15em] text-dust mb-4">Technical — JetBrains Mono</p>
                <p className="font-mono text-2xl font-bold text-signal">Makino · Mazak · Fanuc</p>
                <p className="font-mono text-base text-shop-grey mt-4">(514) 971-1284</p>
                <p className="font-mono text-xs text-dust mt-4 uppercase tracking-[0.1em]">Section Label</p>
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
                <img src="/avi-logo.svg" alt="AVI on dark" className="h-20 w-auto" style={{ filter: "brightness(0) saturate(100%) invert(69%) sepia(52%) saturate(5765%) hue-rotate(108deg) brightness(95%) contrast(84%)" }} />
              </div>
              <div className="bg-white border border-border-light rounded-lg p-12 flex items-center justify-center">
                <img src="/avi-logo.svg" alt="AVI on light" className="h-20 w-auto" />
              </div>
            </div>
            <div className="space-y-3 text-sm text-shop-grey">
              <p><strong className="text-machine-black">Primary:</strong> Green stroke on dark (Graphite) background</p>
              <p><strong className="text-machine-black">Secondary:</strong> Dark stroke on light background</p>
              <p><strong className="text-machine-black">Minimum size:</strong> 32px height on screen</p>
              <p><strong className="text-machine-black">Clear space:</strong> Equal to the height of the &ldquo;I&rdquo; strokes on all sides</p>
              <p><strong className="text-machine-black">Never:</strong> Fill the logo, rotate, stretch, add effects, or change stroke width</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Illustrations */}
      <section className="bg-graphite grid-texture py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-2">07</p>
            <h2 className="text-3xl font-bold tracking-tight text-bright mb-10">Illustration System</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Blueprint", usage: "Hero backgrounds, dark overlays", anim: "Opacity pulse (4s)" },
              { name: "CNC Machine", usage: "Services sections", anim: "Slow float (8s)" },
              { name: "Gear System", usage: "Differentiators, about", anim: "Float + rotation (6s)" },
              { name: "Crosshair", usage: "Precision contexts", anim: "Slow float" },
              { name: "Circuit Board", usage: "Technical sections", anim: "Opacity pulse" },
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
          <p className="text-xs text-steel-light/40 mt-6">Always low opacity (0.05–0.30). Always pointer-events-none. Always respect prefers-reduced-motion.</p>
        </div>
      </section>

      {/* 8. Messaging */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">08</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Messaging Framework</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-graphite rounded-lg p-8 mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.15em] text-steel-light/50 mb-3">Primary Headline</p>
              <p className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-bright">Your CNC is down.<br />We get it running.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Secondary Headlines</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-10">
              {["20 years. 9 brands. One call.", "Full-spectrum CNC service.", "The machine doesn't care what brand it is. Neither do we.", "Trusted across critical sectors.", "Why AVI.", "Diagnostic. Repair. Running."].map((h) => (
                <div key={h} className="bg-white border border-border-light rounded-lg p-4">
                  <p className="text-sm font-semibold text-machine-black">{h}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h3 className="font-semibold text-machine-black mb-4">Elevator Pitches</h3>
            <div className="space-y-4">
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">15 seconds</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&ldquo;AVI Industriel — independent CNC diagnostics and repair in Montreal. 20 years, 9 major brands, same-day response. Your machine is down, we get it running.&rdquo;</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">30 seconds</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&ldquo;AVI Industriel is an independent electromechanical service based in Greater Montreal. Alexandre Vachon has 20 years of hands-on experience across Makino, Mazak, Fanuc, Haas, Siemens, and more. We specialize in CNC diagnostics, geometry alignment, electrical troubleshooting, and preventive maintenance for aerospace, automotive, and defense manufacturers. Same-day response. Honest diagnosis. No brand bias.&rdquo;</p>
              </div>
              <div className="bg-white border border-border-light rounded-lg p-6">
                <span className="font-mono text-xs text-signal">60 seconds</span>
                <p className="text-sm text-shop-grey mt-2 leading-relaxed">&ldquo;When a CNC machine goes down, production bleeds money. Most manufacturers wait days for an OEM technician who only services one brand. AVI Industriel is different. Alexandre Vachon is a certified electro-mechanic with 20 years of experience across 9 major CNC platforms. He&rsquo;s independent — no parts to sell, no brand loyalty, no contract lock-in. Just honest diagnosis and fast repair. Same-day response in Greater Montreal, ready to travel beyond. From emergency breakdowns to preventive maintenance, pre-purchase inspections to safety audits — if it&rsquo;s CNC, he&rsquo;s already seen your exact problem. Call (514) 971-1284.&rdquo;</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Content Guidelines */}
      <section className="bg-concrete py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">09</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Content Guidelines</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Writing Service Descriptions</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              <div className="bg-signal/5 border border-signal/20 rounded-lg p-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-signal font-semibold block mb-2">Good</span>
                <p className="text-sm text-machine-black">&ldquo;Axis drift after a crash? We realign geometry across all major platforms — Makino, Mazak, Haas — and get you back to tolerance.&rdquo;</p>
              </div>
              <div className="bg-red-50 border border-red-200/30 rounded-lg p-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-red-400 font-semibold block mb-2">Bad</span>
                <p className="text-sm text-shop-grey">&ldquo;Our comprehensive geometry alignment service utilizes advanced diagnostic methodologies to ensure optimal machine performance.&rdquo;</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-semibold text-machine-black mb-4">Language to Avoid</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Solutions", "Leverage", "Utilize", "Optimize", "State-of-the-art", "Cutting-edge", "World-class", "Team of experts", "Reach out", "Seamless"].map((word) => (
                <span key={word} className="bg-red-50 text-red-400 text-xs px-3 py-1.5 rounded-full border border-red-200/30 line-through">{word}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 10. Social */}
      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.15em] text-dust mb-2">10</p>
            <h2 className="text-3xl font-bold tracking-tight text-machine-black mb-10">Social Media Voice</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-semibold text-machine-black mb-4">Facebook Content Mix</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {[
                { pct: "40%", label: "Job Stories", desc: "What we fixed, how" },
                { pct: "30%", label: "Knowledge", desc: "Tips, common issues" },
                { pct: "20%", label: "Credibility", desc: "Experience, brands" },
                { pct: "10%", label: "Availability", desc: "Booking openings" },
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
            <h3 className="font-semibold text-machine-black mb-4">Rules</h3>
            <div className="space-y-2 text-sm text-shop-grey">
              <p>&bull; Maximum 2 hashtags per post. Many posts need zero.</p>
              <p>&bull; No emojis in professional posts. One max if tone warrants it.</p>
              <p>&bull; First person — &ldquo;I&rdquo; not &ldquo;we&rdquo; or &ldquo;the team.&rdquo;</p>
              <p>&bull; French posts are fine — Montreal is bilingual.</p>
              <p>&bull; Write like texting a colleague, not writing an ad.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-graphite py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-steel-light/40 text-xs">Prepared by EMBI Studio &mdash; <a href="https://embi-studio.com" className="text-signal/50 hover:text-signal transition-colors">embi-studio.com</a></p>
        </div>
      </section>
    </main>
  );
}
