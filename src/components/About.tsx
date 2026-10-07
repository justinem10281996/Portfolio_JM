import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Zap, ChevronLeft, ChevronRight, Layers, Plug } from 'lucide-react';
import { Section, SectionHeader } from './ui/section';

declare const process: { env: { PUBLIC_URL: string } };

const photos = [
  `${process.env.PUBLIC_URL}/assets/justinem/IMG_0224.jpg`,
  `${process.env.PUBLIC_URL}/assets/justinem/IMG_0212.jpg`,
  `${process.env.PUBLIC_URL}/assets/justinem/IMG_0150.jpg`,
];

const highlights = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
  { icon: Lightbulb, title: 'Problem Solver', desc: 'Finding elegant solutions to complex challenges' },
  { icon: Users, title: 'Team Player', desc: 'Collaborating effectively with diverse teams' },
  { icon: Zap, title: 'Fast Learner', desc: 'Quickly adapting to new technologies' },
];

const services = [
  { icon: Code2, title: 'Website Development', desc: 'Building websites from start to finish using various technologies.' },
  { icon: Layers, title: 'Software Development', desc: 'Creating software applications for various platforms.' },
  { icon: Plug, title: 'Third-Party Integration', desc: 'Integrating third-party services and APIs into existing applications.' },
];

export const About = () => {
  const { ref, revealed } = useReveal();
  const { ref: ref2, revealed: revealed2 } = useReveal();
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  const goNext = () => setCurrentPhoto((prev) => (prev + 1) % photos.length);

  return (
    <Section id="about">
      <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''}`}>
        <SectionHeader
          index="01"
          label="Get To Know Me"
          title="About Me"
        />
      </div>

        <div ref={ref2} className={`reveal-up ${revealed2 ? 'revealed' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Auto-sliding Photo Carousel */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-foreground/10 to-foreground/5">
                {/* Photo Carousel - CSS transitions */}
                {photos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Justine M. Hilario"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      i === currentPhoto ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />

                {/* Navigation arrows */}
                <button
                  onClick={goPrev}
                  title="Previous photo"
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={goNext}
                  title="Next photo"
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-foreground" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPhoto(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentPhoto ? 'bg-foreground w-6' : 'bg-foreground/30 hover:bg-foreground/60 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-border -z-10" />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
<div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    I build <span className="text-shimmer">digital products</span> that make a difference
                  </h3>
                  <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <p>
                      I'm a Full Stack Developer with 3+ years of experience turning business problems into working software.
                      I've built multi-tenant school systems, billing and subscription portals, biometric attendance platforms,
                      and inventory and document management tools, working on both the front end and the REST API.
                    </p>
                    <p>
                      I care about clean, maintainable code and systems people actually enjoy using. Outside of work,
                      I keep learning new tools, build side projects, and share the process on TikTok.
                    </p>
                    <p className="text-foreground font-medium">
                      Currently open to remote full-time roles.
                    </p>
                  </div>
                </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="bg-muted/30 hover:bg-muted/50 transition-colors border-none">
                      <CardContent className="p-3 sm:p-4">
                        <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center mb-2">
                          <item.icon className="w-4 h-4 text-foreground" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* What I Do */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">What I Do</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {services.map((s) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors border-none">
                        <CardContent className="p-3 sm:p-4">
                          <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center mb-2">
                            <s.icon className="w-4 h-4 text-foreground" />
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-foreground">{s.title}</p>
                          <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
};
