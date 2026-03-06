import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projects = [
  {
    title: "Immeuble EDGE R+5",
    category: "Commercial — Certification EDGE",
    year: "2024",
    image: project1,
    size: "large",
    location: "Bd Abderrahim Bouabid, l'Oasis",
  },
  {
    title: "Résidence Palmier",
    category: "Résidentiel — Haut Standing",
    year: "2025",
    image: project2,
    size: "small",
    location: "Quartier Palmier, Casablanca",
  },
  {
    title: "Villa G",
    category: "Résidentiel — Villa Jumelée",
    year: "2025",
    image: project3,
    size: "wide",
    location: "Quartier Longchamp, Casablanca",
  },
  {
    title: "Villa G — Vue 2",
    category: "Résidentiel — Villa Jumelée",
    year: "2025",
    image: project4,
    size: "small",
    location: "Quartier Longchamp, Casablanca",
  },
  {
    title: "Résidence Palmier — Vue 2",
    category: "Résidentiel — R+4",
    year: "2025",
    image: project5,
    size: "large",
    location: "Quartier Palmier, Casablanca",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-40 px-6 md:px-12">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <p className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl font-light">
              Sélection
            </h2>
          </div>
          <p className="hidden md:block text-body text-sm text-muted-foreground max-w-xs">
            Une sélection de projets qui reflètent notre approche architecturale
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {projects.map((project, i) => {
          const colSpan =
            project.size === "large"
              ? "md:col-span-7"
              : project.size === "wide"
              ? "md:col-span-12"
              : "md:col-span-5";

          const aspectRatio =
            project.size === "wide" ? "aspect-[21/9]" : "aspect-[4/5]";

          return (
            <ScrollReveal key={i} delay={i * 100} className={colSpan}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="project-card group"
              >
                <div className={`image-reveal ${aspectRatio} relative`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="project-overlay absolute inset-0 bg-foreground/20 flex items-end p-6 md:p-8">
                    <div>
                      <p className="text-body text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-display text-2xl md:text-3xl font-light text-primary-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <h3 className="text-body text-sm font-medium">{project.title}</h3>
                  <span className="text-body text-xs text-muted-foreground">{project.year}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
