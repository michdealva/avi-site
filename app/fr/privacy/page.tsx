import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { EMAIL } from "@/data/content";

export const metadata: Metadata = {
  title: "Politique de confidentialit\u00e9 | AVI Industriel",
  description:
    "Politique de confidentialit\u00e9 d\u2019AVI Industriel. D\u00e9couvrez comment nous traitons les donn\u00e9es collect\u00e9es via notre formulaire de soumission. Aucun cookie, aucun suivi.",
  alternates: { canonical: "https://aviindustriel.com/fr/privacy" },
};

export default function PrivacyPageFR() {
  return (
    <main>
      <section className="bg-graphite grid-texture py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold tracking-tight text-bright md:text-5xl">
              Politique de confidentialit&eacute;
            </h1>
            <p className="mt-4 text-lg text-steel-light">
              Derni&egrave;re mise &agrave; jour : avril 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Donn&eacute;es collect&eacute;es
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              Lorsque vous soumettez une demande de soumission via notre
              formulaire de contact, nous recueillons les informations
              suivantes : votre nom, le nom de votre entreprise, votre adresse
              courriel, votre num&eacute;ro de t&eacute;l&eacute;phone et les
              d&eacute;tails de votre machine CNC (marque, mod&egrave;le, type
              de contr&ocirc;leur et description du probl&egrave;me).
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Utilisation des donn&eacute;es
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              Nous utilisons les informations fournies uniquement pour
              r&eacute;pondre &agrave; votre demande de service,
              pr&eacute;parer une soumission et coordonner les travaux de
              r&eacute;paration ou de diagnostic. Nous n&rsquo;utilisons pas
              vos donn&eacute;es &agrave; des fins de marketing, sauf si vous
              demandez express&eacute;ment &agrave; &ecirc;tre
              contact&eacute; pour des services futurs.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Cookies et suivi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              Ce site Web n&rsquo;utilise aucun cookie, aucun outil
              d&rsquo;analyse ni aucun script de suivi tiers. Nous ne
              collectons pas de donn&eacute;es de navigation, d&rsquo;adresses
              IP ni d&rsquo;informations sur les appareils au-del&agrave; de
              ce qui est strictement n&eacute;cessaire pour livrer ce site.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Partage avec des tiers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              Nous ne vendons, ne louons et ne partageons vos informations
              personnelles avec aucun tiers. Vos donn&eacute;es restent chez
              AVI Industriel Inc. et sont utilis&eacute;es uniquement aux fins
              d&eacute;crites ci-dessus.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Conservation des donn&eacute;es
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              Nous conservons les donn&eacute;es de demande de soumission
              aussi longtemps que n&eacute;cessaire pour fournir nos services
              et maintenir des dossiers pour d&rsquo;&eacute;ventuels travaux
              de suivi. Vous pouvez demander la suppression de vos
              donn&eacute;es &agrave; tout moment en nous contactant.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl font-bold text-machine-black">
              Nous contacter
            </h2>
            <p className="mt-4 text-base leading-relaxed text-shop-grey">
              Pour toute question sur cette politique de
              confidentialit&eacute; ou pour demander la suppression de vos
              donn&eacute;es, contactez-nous &agrave;{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-signal underline underline-offset-4 transition-colors hover:text-signal-dark"
              >
                {EMAIL}
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
