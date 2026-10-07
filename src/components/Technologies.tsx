import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { technologiesData } from '../data/portfolio-data';
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './ui/section';

export const Technologies = () => {
  const { ref, revealed } = useReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Section id="technologies">
      <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''}`}>
        <SectionHeader
          index="04"
          label="Tech Stack"
          title="Technologies"
          description="Tools, frameworks, and languages I work with daily - from frontend interfaces to backend systems, database design, and everything in between that powers a complete web or mobile application."
        />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
        {technologiesData.map((tech, i) => (
          <TechCard key={tech.id} tech={tech} index={i} hovered={hovered} onHover={setHovered} />
        ))}
      </div>
    </Section>
  );
};

function TechCard({ tech, index, hovered, onHover }: { tech: typeof technologiesData[0]; index: number; hovered: number | null; onHover: (id: number | null) => void }) {
  const { ref, revealed } = useReveal();
  const isH = hovered === tech.id;

  return (
    <div ref={ref} className={`reveal-scale ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 0.04}s` }}>
      <motion.a
        href={tech.link}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => onHover(tech.id)}
        onHoverEnd={() => onHover(null)}
        whileHover={{ y: -4, scale: 1.05 }}
        className={`hover:shadow-foreground/5 transition-all duration-300 cursor-pointer relative group ${isH ? 'hover:shadow-foreground/5' : ''}`}
      >
        <Card className={`flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 lg:p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${isH ? 'bg-foreground/10' : ''}`}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:animate-bounce">
            <img src={tech.image} alt={tech.name} className="w-full h-full object-contain grayscale" loading="lazy" onError={e => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/40?text=${tech.name[0]}`; }} />
          </div>
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors">{tech.name}</span>
          <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/60 text-center leading-tight group-hover:text-muted-foreground transition-colors">{tech.category}</span>

          {isH && (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-muted border-none text-muted-foreground text-[10px] rounded whitespace-nowrap z-50 shadow-lg">
              {tech.description}
            </motion.div>
          )}
        </Card>
      </motion.a>
    </div>
  );
}
