import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { personalProjectsData } from '../data/portfolio-data';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle, CardDescription } from './ui/card';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { StaggerWords } from './ui/StaggerWords';

export const PersonalProjects = () => {
  const { ref, revealed } = useReveal();
  const [selected, setSelected] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number[]>([]);
  const [showAllTech, setShowAllTech] = useState<number[]>([]);

  const project = personalProjectsData.find(p => p.id === selected);

  return (
    <section id="personal-projects" className="py-16 sm:py-20 lg:py-28 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''} mb-10 sm:mb-14`}>
          <span className="text-green-400 font-mono text-xs tracking-wider uppercase">My Work</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-5 text-foreground">Personal Projects</h2>
          <StaggerWords
            text="Projects I've built independently to explore new technologies and solve problems."
            className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed"
            as="p"
          />
        </div>

        <Carousel opts={{ align: 'start', loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {personalProjectsData.map((p, i) => (
              <CarouselItem key={p.id} className="pl-2 md:pl-4 basis-[90%] sm:basis-3/4 lg:basis-1/2 h-full">
                <ProjectCard
                  project={p}
                  index={i}
                  isExpanded={expanded.includes(p.id)}
                  onToggleExpand={() => setExpanded(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])}
                  showAllTech={showAllTech.includes(p.id)}
                  onToggleTech={() => setShowAllTech(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])}
                  onViewImages={() => setSelected(p.id)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
        </Carousel>

        <div className="flex justify-center mt-8">
          <Badge variant="outline" className="text-xs font-mono border-green-500/20 text-muted-foreground px-3 py-1">
            {personalProjectsData.length} Projects
          </Badge>
        </div>
      </div>

      <ProjectDialog project={project} onClose={() => setSelected(null)} />
    </section>
  );
};

function ProjectCard({ project, index, isExpanded, onToggleExpand, showAllTech, onToggleTech, onViewImages }: any) {
  const { ref, revealed } = useReveal();
  const hasImg = project.subimage.length > 0;
  const truncate = (t: string, max = 150) => t.length <= max ? t : t.slice(0, max) + '...';
  const techs = showAllTech ? project.techimage : project.techimage.slice(0, 5);

  return (
    <div ref={ref} className={`reveal-up h-full ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <motion.div whileHover={{ y: -4 }} className="pb-4 h-full">
        <Card
          className="flex flex-col h-full rounded-xl group"
        >
          {/* Image */}
          <div className={`relative h-48 sm:h-56 lg:h-64 rounded-t-xl overflow-hidden bg-gradient-to-br from-green-500/5 to-emerald-500/5 ${hasImg ? 'cursor-pointer' : ''}`} onClick={hasImg ? onViewImages : undefined}>
            {hasImg ? (
              <>
                <motion.img src={project.subimage[0].src} alt={project.name} className="w-full h-full object-cover" loading="lazy" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={project.image} alt={project.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-50 group-hover:animate-bounce" loading="lazy" />
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent className="flex-1 p-4 sm:p-5 pt-4">
            <CardTitle className="text-foreground mb-1 group-hover:text-green-400 transition-colors">{project.name}</CardTitle>
            {project.subtitle && <p className="text-[10px] sm:text-xs text-green-400/60 mb-3">{project.subtitle}</p>}

            <CardDescription className="mb-3 sm:mb-4">
              {isExpanded ? project.description : truncate(project.description)}
            </CardDescription>
            {project.description.length > 150 && (
              <button onClick={onToggleExpand} className="text-green-400 text-xs font-semibold mb-3 self-start transition-all duration-300 hover:opacity-80">{isExpanded ? 'See Less' : 'See More'}</button>
            )}

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
              {techs.map((t: string, i: number) => (
                <motion.div key={i} whileHover={{ scale: 1.15 }} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-muted/50 p-0.5 sm:p-1">
                  <img src={t} alt="" className="w-full h-full object-contain" loading="lazy" onError={e => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32?text=T'; }} />
                </motion.div>
              ))}
              {project.techimage.length > 5 && (
                <button onClick={onToggleTech} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-muted/50 flex items-center justify-center text-xs text-muted-foreground hover:text-green-400 hover:bg-green-500/10 transition-all duration-300">
                  {showAllTech ? '−' : `+${project.techimage.length - 5}`}
                </button>
              )}
              <div className="ml-auto flex gap-1">
                {project.link && (
                  <Button variant="ghost" size="icon-sm" onClick={() => window.open(project.link, '_blank')}>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
                {project.github && (
                  <Button variant="ghost" size="icon-sm" onClick={() => window.open(project.github, '_blank')}>
                    <Github className="w-4 h-4" />
                  </Button>
                )}
                {project.tiktok && (
                  <Button variant="ghost" size="icon-sm" onClick={() => window.open(project.tiktok, '_blank')}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: any; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setIdx(0);
    setLoaded(false);
  }, [project]);

  if (!project) return null;
  const img = project.subimage[idx];

  const goTo = (i: number) => {
    setIdx(i);
    setLoaded(false);
  };

  return (
    <Dialog open={!!project} onOpenChange={o => !o && onClose()}>
      <DialogContent className="w-screen h-[100dvh] max-w-none lg:w-[90vw] lg:h-[85vh] p-0 rounded-none lg:rounded-2xl border-none bg-background overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-[60%] flex flex-col h-[40dvh] lg:h-full bg-background min-h-0">
            <div className="flex-1 flex items-center justify-center p-3 relative min-h-0 overflow-hidden">
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/20 rounded-lg">
                  <div className="w-8 h-8 border-2 border-green-400/30 border-t-green-400 rounded-full animate-spin" />
                </div>
              )}
              <img
                src={img.src}
                alt={img.title}
                className={`max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
            </div>
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 shrink-0">
              <button onClick={() => goTo(idx - 1)} disabled={idx === 0} className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted disabled:opacity-30 flex items-center justify-center transition-all duration-300"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
              <div className="flex gap-1">
                {project.subimage.slice(0, 12).map((_: any, i: number) => (
                  <button key={i} onClick={() => goTo(i)} className={`h-1 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-green-400' : 'w-2 bg-muted'}`} />
                ))}
              </div>
              <button onClick={() => goTo(idx + 1)} disabled={idx === project.subimage.length - 1} className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted disabled:opacity-30 flex items-center justify-center transition-all duration-300"><ChevronRight className="w-4 h-4 text-foreground" /></button>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col overflow-y-auto">
            <div className="p-4 sm:p-6 bg-green-500/5">
              <span className="text-[10px] text-green-400/50 font-mono">{idx + 1} / {project.subimage.length}</span>
              <DialogTitle className="text-base sm:text-lg font-bold text-green-400 mt-1">{img?.title || project.name}</DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-2">{img?.description}</DialogDescription>
            </div>
            <div className="p-4 sm:p-6 flex-1">
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-[10px] transition-all duration-300">{project.subtitle}</Badge>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground mt-2 mb-2 sm:mb-3">{project.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{project.description}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techimage.map((t: string, i: number) => (
                  <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-muted/50 p-0.5 sm:p-1">
                    <img src={t} alt="" className="w-full h-full object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            {(project.link || project.github || project.tiktok) && (
              <div className="p-4 sm:p-6 flex gap-2">
                {project.link && <Button variant="ghost" size="icon-sm" onClick={() => window.open(project.link, '_blank')}><ExternalLink className="w-4 h-4" /></Button>}
                {project.github && <Button variant="ghost" size="icon-sm" onClick={() => window.open(project.github, '_blank')}><Github className="w-4 h-4" /></Button>}
                {project.tiktok && (
                  <Button variant="ghost" size="icon-sm" onClick={() => window.open(project.tiktok, '_blank')}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
