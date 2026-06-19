import { useReveal } from '../hooks/useReveal';
import { footerData } from '../data/portfolio-data';
import { Mail, Facebook, Github, Linkedin, FileText, ArrowUp, type LucideProps } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { useMagneticButton } from '../hooks/useMagneticButton';

const TikTokIcon = (props: LucideProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const icons: Record<string, React.ComponentType<any>> = { Gmail: Mail, Facebook, GitHub: Github, LinkedIn: Linkedin, Indeed: FileText, TikTok: TikTokIcon };

export const Footer = () => {
  const { ref, revealed } = useReveal();
  const socialRef = useMagneticButton(0.2);

  return (
    <footer id="contact" className="py-12 sm:py-16 lg:py-20 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className={`reveal-blur ${revealed ? 'revealed' : ''}`}>
          <Card className="mb-8 sm:mb-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <CardContent className="p-5 sm:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
                <div>
                  <span className="text-green-400 font-mono text-xs tracking-wider">Get in Touch</span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mt-2 mb-2 sm:mb-3">
                    Let's build something <span className="text-shimmer">amazing</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">Open to new opportunities and collaborations.</p>
                </div>

                <div className="flex gap-2 flex-wrap" ref={socialRef}>
                  {footerData.map((s, i) => {
                    const Icon = icons[s.name] || Mail;
                    return (
                      <motion.a key={s.id} href={s.link} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.05 }} className="magnetic-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-muted/50 hover:bg-green-500/10 flex items-center justify-center transition-all">
                        <Icon className="w-4 h-4 text-muted-foreground hover:text-green-400 transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground font-mono">© 2026 Justine M. Hilario</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Built with</span>
              <span className="text-green-400">React</span>
              <span>&</span>
              <span className="text-green-400">TypeScript</span>
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1, y: -2 }}
                className="ml-3 w-7 h-7 rounded-lg bg-muted/50 hover:bg-green-500/10 flex items-center justify-center transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5 text-muted-foreground hover:text-green-400 transition-colors duration-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
