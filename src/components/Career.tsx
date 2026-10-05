import { useReveal } from '../hooks/useReveal';
import { careerData } from '../data/portfolio-data';
import { Calendar, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from './ui/section';

export const Career = () => {
  const { ref, revealed } = useReveal();

  return (
    <Section id="career" className="max-w-none">
      <div className="max-w-4xl mx-auto px-0">
        <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''}`}>
          <SectionHeader
            index="05"
            label="Experience"
            title="Career Journey"
            description="My professional experience and the skills I've developed along the way - from freelance contract work to building full-stack systems that solve practical business challenges."
          />
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6 sm:space-y-8">
            {careerData.map((job, i) => (
              <CareerCard key={job.id} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

function CareerCard({ job, index }: { job: typeof careerData[0]; index: number }) {
  const { ref, revealed } = useReveal();

  return (
    <div ref={ref} className={`reveal-up ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="relative pl-5 sm:pl-6 md:pl-16 group">
        <div className="absolute left-0 md:left-6 top-6 sm:top-7 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-foreground border-[3px] border-background z-10 group-hover:scale-150 transition-transform duration-300" />

        <motion.div whileHover={{ y: -2 }} className="hover:shadow-foreground/5 transition-all duration-300">
          <Card className="rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-muted/50 shrink-0 group-hover:ring-2 ring-foreground/20 transition-all duration-300">
                  <img src={job.image} alt={job.company} className="w-full h-full object-cover" loading="lazy" onError={e => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/48?text=${job.company[0]}`; }} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-foreground transition-colors">{job.position}</h3>
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-foreground text-xs sm:text-sm flex items-center gap-1 hover:underline transition-all duration-300">
                      {job.company} <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <p className="text-foreground/70 text-xs sm:text-sm">{job.company}</p>
                  )}
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs text-muted-foreground mt-1 sm:mt-1.5">
                    {job.duration && <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-foreground/40" /> {job.duration}</span>}
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {job.description.split('\n').map((item: string, idx: number) => (
                  <li key={idx} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-foreground mt-0.5 shrink-0 text-[6px]">●</span>
                    <span>{item.replace('• ', '').replace('•', '')}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {job.techStack.map((tech: string) => (
                  <Badge key={tech} variant="outline" className="text-[9px] sm:text-[10px] font-mono border-border text-muted-foreground hover:border-border hover:text-foreground transition-colors px-1.5 sm:px-2 py-0.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
