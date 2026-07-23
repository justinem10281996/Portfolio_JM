import { useReveal } from '../hooks/useReveal';
import { careerData } from '../data/portfolio-data';
import { Calendar, ExternalLink, MapPin } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { StaggerWords } from './ui/StaggerWords';

export const Career = () => {
  const { ref, revealed } = useReveal();

  return (
    <section id="career" className="py-16 sm:py-20 lg:py-28 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''} mb-10 sm:mb-14`}>
          <span className="text-green-400 font-mono text-xs tracking-wider uppercase">Experience</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-5 text-foreground">Career Journey</h2>
          <StaggerWords
            text="My professional experience and the skills I've developed along the way - from freelance contract work to building full-stack systems that solve practical business challenges."
            className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed"
            as="p"
          />
        </div>

        {/* Inline horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {careerData.map((job, i) => (
            <CareerCard key={job.id} job={job} index={i} />
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10"
        >
          <Card className="rounded-xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/10">
            <CardContent className="p-4 sm:p-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <div className="text-center">
                <p className="text-lg sm:text-2xl font-bold text-green-400">{careerData.length}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Companies</p>
              </div>
              <div className="w-px h-8 bg-green-500/20 hidden sm:block" />
              <div className="text-center">
                <p className="text-lg sm:text-2xl font-bold text-green-400">4+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-8 bg-green-500/20 hidden sm:block" />
              <div className="text-center">
                <p className="text-lg sm:text-2xl font-bold text-green-400">15+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="w-px h-8 bg-green-500/20 hidden sm:block" />
              <div className="text-center">
                <p className="text-lg sm:text-2xl font-bold text-green-400">3</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Countries Served</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

function CareerCard({ job, index }: { job: typeof careerData[0]; index: number }) {
  const { ref, revealed } = useReveal();

  return (
    <div ref={ref} className={`reveal-up h-full ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <motion.div whileHover={{ y: -4 }} className="h-full">
        <Card className="flex flex-col h-full rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgb(34,197,94,0.12)] transition-all duration-500 group">
          <CardContent className="flex flex-col h-full p-4 sm:p-5">
            {/* Header - inline layout */}
            <div className="flex items-start gap-3 mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-muted/50 shrink-0 group-hover:ring-2 ring-green-500/30 transition-all duration-300">
                <img src={job.image} alt={job.company} className="w-full h-full object-cover" loading="lazy" onError={e => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/56?text=${job.company[0]}`; }} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-green-400 transition-colors leading-tight">{job.position}</h3>
                {job.link ? (
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-green-400 text-xs sm:text-sm flex items-center gap-1 hover:underline transition-all duration-300 mt-0.5">
                    {job.company} <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                ) : (
                  <p className="text-green-400/70 text-xs sm:text-sm mt-0.5">{job.company}</p>
                )}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground mt-1.5">
                  {job.duration && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-green-400/50" /> {job.duration}
                    </span>
                  )}
                  {job.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-green-400/50" /> {job.location.length > 25 ? job.location.slice(0, 25) + '...' : job.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description - compact */}
            <ul className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4 flex-1">
              {job.description.split('\n').slice(0, 4).map((item: string, idx: number) => (
                <li key={idx} className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-green-400 mt-0.5 shrink-0 text-[6px]">●</span>
                  <span className="line-clamp-2">{item.replace('• ', '').replace('•', '')}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack - inline */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-3 border-t border-foreground/5">
              {job.techStack.slice(0, 6).map((tech: string) => (
                <Badge key={tech} variant="outline" className="text-[8px] sm:text-[9px] font-mono border-green-500/20 text-muted-foreground px-1.5 py-0">
                  {tech}
                </Badge>
              ))}
              {job.techStack.length > 6 && (
                <Badge variant="outline" className="text-[8px] sm:text-[9px] font-mono border-green-500/20 text-green-400 px-1.5 py-0">
                  +{job.techStack.length - 6}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
