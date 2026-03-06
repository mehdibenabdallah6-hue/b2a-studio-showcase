import ScrollReveal from "./ScrollReveal";

const ApproachSection = () => {
  const approaches = [
    {
      number: "01",
      title: "Écoute",
      description:
        "Chaque projet débute par une compréhension profonde du site, du programme et des aspirations de nos clients.",
    },
    {
      number: "02",
      title: "Conception",
      description:
        "Nous développons des solutions architecturales singulières, où chaque détail est pensé dans sa globalité.",
    },
    {
      number: "03",
      title: "Réalisation",
      description:
        "Un suivi rigoureux de la construction garantit la fidélité de l'exécution à la vision architecturale.",
    },
  ];

  return (
    <section id="approach" className="py-24 md:py-40 px-6 md:px-12">
      <ScrollReveal>
        <p className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Méthodologie
        </p>
        <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-light mb-20">
          Notre Approche
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {approaches.map((item, i) => (
          <ScrollReveal key={i} delay={i * 150}>
            <div className="group">
              <div className="h-px bg-border mb-8 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-accent w-0 group-hover:w-full transition-all duration-700" />
              </div>
              <span className="text-body text-xs text-muted-foreground tracking-[0.2em]">
                {item.number}
              </span>
              <h3 className="text-display text-2xl md:text-3xl font-light mt-4 mb-4">
                {item.title}
              </h3>
              <p className="text-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ApproachSection;
