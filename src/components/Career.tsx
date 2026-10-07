import { useEffect, useState, useCallback } from 'react';
import { useReveal } from '../hooks/useReveal';
import { careerData } from '../data/portfolio-data';
import { Calendar, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import type { CarouselApi } from './ui/carousel';
import { Section, SectionHeader } from './ui/section';

const AUTO_SLIDE_MS = 5000;

export const Career = () => {
  const { ref, revealed } = useReveal();
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback((e: CarouselApi) => {
    if (!e) return;
    setSnaps(e.scrollSnapList());
    setSelected(e.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || paused) return;
    const t = setTimeout(() => api.scrollNext(), AUTO_SLIDE_MS);
    return () => clearTimeout(t);
  }, [api, selected, paused]);

  return (
    <Section id="career" className="max-w-none">
      <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''}`}>
        <SectionHeader
          index="03"
          label="Experience"
          title="Career Journey"
          description="My professional experience and the skills I've developed along the way - from freelance contract work to building full-stack systems that solve practical business challenges."
        />
      </div>

      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <Carousel opts={{ align: 'start', loop: true }} setApi={setApi} className="relative">
            <CarouselContent className="ml-0 mt-2 py-8">
              {careerData.map((job, i) => (
                <CarouselItem key={job.id} className="px-2 basis-full sm:basis-1/2 h-full">
                <CareerCard job={job} index={i} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to role ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${i === selected ? 'w-6 bg-foreground' : 'w-1.5 bg-border hover:bg-foreground/50'}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

function CareerCard({ job, index }: { job: typeof careerData[0]; index: number }) {
  const { ref, revealed } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal-up ${revealed ? 'revealed' : ''} h-full`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <Card className="rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full hover:shadow-foreground/5 transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-muted/50 shrink-0">
              <img
                src={job.image}
                alt={job.company}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={e => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/48?text=${job.company[0]}`; }}
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold text-foreground leading-tight">{job.position}</h3>
              {job.link ? (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 text-[11px] sm:text-xs flex items-center gap-1 hover:underline mt-0.5 break-words"
                >
                  {job.company} <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                </a>
              ) : (
                <p className="text-foreground/70 text-[11px] sm:text-xs mt-0.5 break-words">{job.company}</p>
              )}
            </div>
          </div>

          {job.duration && (
            <div className="text-[10px] sm:text-[11px] text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-foreground/40 shrink-0" /> {job.duration}
              </span>
            </div>
          )}

          <ul className="space-y-1.5 mb-3">
            {job.description.split('\n').map((item: string, idx: number) => (
              <li key={idx} className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed flex gap-1.5">
                <span className="text-foreground mt-1 shrink-0 text-[5px]">●</span>
                <span>{item.replace('• ', '').replace('•', '')}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1">
            {job.techStack.map((tech: string) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-[8px] sm:text-[9px] font-mono border-border text-muted-foreground hover:text-foreground px-1.5 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}