import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { TextScramble } from './ui/TextScramble';
import { StaggerWords } from './ui/StaggerWords';
import { AnimatedCounter } from './AnimatedCounter';

declare const process: { env: { PUBLIC_URL: string } };

export const Hero = () => {
  const { ref: r1, revealed: v1 } = useReveal(0.1);
  const { ref: r2, revealed: v2 } = useReveal(0.1);
  const { ref: r3, revealed: v3 } = useReveal(0.1);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-14 sm:pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/background.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_50%]scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 ml-auto w-full max-w-3xl px-6 sm:px-10 lg:pr-16 text-right">
        {/* Badge */}
        <div ref={r1} className={`reveal-up ${v1 ? 'revealed' : ''}`}>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border bg-background/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
            <TextScramble
              text="Available for work"
              speed={80}
              className="text-foreground font-mono text-xs tracking-wider"
            />
          </div>
        </div>

        {/* Name */}
        <div ref={r2} className={`reveal-blur ${v2 ? 'revealed' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <h1 className="text-3xl sm:text-6xl font-bold leading-[0.85] tracking-tighter mb-6">
            <span className="block text-foreground">Justine M. Hilario</span>
          </h1>
        </div>

        {/* Role + Desc */}
        <div ref={r3} className={`reveal-up ${v3 ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-lg sm:text-xl text-foreground mb-3 font-bold">Full Stack Developer</p>
          <StaggerWords
            text="I build web and mobile systems for real businesses, from multi-tenant platforms to payment and hardware integrations. React, TypeScript, Laravel, and MySQL."
            className="text-sm sm:text-base text-foreground max-w-lg ml-auto mb-10"
            as="p"
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-sm ml-auto"
        >
          {[
            { v: 3, suffix: '+', l: 'Years' },
            { v: 10, suffix: '+', l: 'Projects' },
            { v: 18, suffix: '+', l: 'Tech' },
          ].map((s, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-right cursor-default">
              <div className="text-2xl font-bold text-foreground">
                <AnimatedCounter value={s.v} suffix={s.suffix} />
              </div>
              <div className="text-xs text-foreground mt-1">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-border rounded-full flex justify-center p-1.5"
        >
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
