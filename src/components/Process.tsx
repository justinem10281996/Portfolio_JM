import { useReveal } from '../hooks/useReveal';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { Search, Layers, Code2, Rocket } from 'lucide-react';
import { Section, SectionHeader } from './ui/section';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Discover',
    desc: 'Understand the goal, the users, and the constraints before writing a single line of code. Align on scope, features, and what success looks like.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Plan',
    desc: 'Map out the architecture, data flow, and tech stack, then break the work into milestones so progress stays visible from day one.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Build',
    desc: 'Develop in small, reviewable iterations - clean components, tested APIs, and regular demos so there are no surprises at the end.',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Deliver',
    desc: 'Ship with QA, performance checks, and documentation, then stay available for fixes and improvements after launch.',
  },
];

const principles = ['Clean, maintainable code', 'Regular demos & updates', 'Post-launch support'];

export const Process = () => {
  const { ref, revealed } = useReveal();

  return (
    <Section id="process">
      <div ref={ref} className={`reveal-blur ${revealed ? 'revealed' : ''}`}>
        <SectionHeader
          index="07"
          label="Process"
          title="How I Work"
          description="A straightforward workflow I follow on every project - from the first conversation to launch - so the result is predictable, maintainable, and delivered on time."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {steps.map((step, i) => (
          <ProcessCard key={step.num} step={step} index={i} />
        ))}
      </div>

      <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {principles.map((p) => (
          <Badge
            key={p}
            variant="outline"
            className="text-[10px] sm:text-xs font-mono border-border text-muted-foreground px-3 py-1"
          >
            {p}
          </Badge>
        ))}
      </div>
    </Section>
  );
};

function ProcessCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const { ref, revealed } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal-up h-full ${revealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <motion.div whileHover={{ y: -6 }} className="h-full">
        <Card className="h-full relative overflow-hidden rounded-xl bg-muted/30 hover:bg-muted/50 border-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-colors duration-300">
          <CardContent className="p-5 sm:p-6 h-full flex flex-col">
            <span className="absolute top-3 right-4 text-5xl sm:text-6xl font-bold font-[Space_Grotesk] text-foreground/5 select-none pointer-events-none">
              {step.num}
            </span>

            <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center mb-4">
              <step.icon className="w-5 h-5 text-foreground" />
            </div>

            <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 relative z-10">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed relative z-10">
              {step.desc}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
