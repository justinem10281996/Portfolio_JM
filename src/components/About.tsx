import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''} mb-10 sm:mb-14`}>
          <span className="text-green-400 font-mono text-xs tracking-wider uppercase">Get To Know Me</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-5 text-foreground">About Me</h2>
        </div>

        <div ref={ref2} className={`reveal-up ${revealed2 ? 'revealed' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Auto-sliding Photo Carousel */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-green-500/10 to-emerald-500/5">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground" />
                </button>
                <button
                  onClick={goNext}
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
                        i === currentPhoto ? 'bg-green-400 w-6' : 'bg-white/50 hover:bg-white/80 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-green-500/10 -z-10" />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  I build <span className="text-shimmer">digital products</span> that make a difference
                </h3>
                <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Hi! I'm <span className="text-green-400 font-medium">Justine M. Hilario</span>, a passionate Full Stack Developer 
                    with over 4 years of experience building web applications that solve real business problems.
                  </p>
                  <p>
                    I specialize in <span className="text-foreground">React, TypeScript, Laravel</span>, and <span className="text-foreground">MySQL</span>, 
                    creating everything from inventory management systems to biometric attendance platforms. 
                    I love turning complex requirements into clean, user-friendly solutions.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, sharing my work on TikTok, 
                    and continuously learning to stay ahead in this ever-evolving industry.
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
                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                          <item.icon className="w-4 h-4 text-green-400" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
