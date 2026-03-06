import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import studioImage from "@/assets/project-4.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-secondary">
      <div className="px-6 md:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Image */}
            <div className="image-reveal aspect-[3/4]">
              <img
                src={studioImage}
                alt="Atelier B2A"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                L'Agence
              </p>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-[1.1]">
                Créer des espaces
                <span className="italic"> qui racontent</span>
              </h2>
              <div className="space-y-6 text-body text-sm leading-relaxed text-muted-foreground">
                <p>
                  B2A est une agence d'architecture indépendante fondée à Paris. 
                  Notre pratique s'engage dans un travail diversifié visant à créer 
                  des espaces contemporains ancrés dans un contexte culturel.
                </p>
                <p>
                  Actifs dans les domaines de l'architecture, du design urbain 
                  et du mobilier, nous nous engageons à collaborer étroitement 
                  avec nos partenaires pour créer des projets architecturalement, 
                  socialement et intellectuellement cohérents.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { number: "15+", label: "Projets" },
                  { number: "7", label: "Années" },
                  { number: "3", label: "Prix" },
                ].map((stat, i) => (
                  <div key={i}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.2, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="text-display text-3xl md:text-4xl font-light block"
                    >
                      {stat.number}
                    </motion.span>
                    <span className="text-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
