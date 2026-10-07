import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

declare const process: { env: { PUBLIC_URL: string } };

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setMounted(false), 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      style={{ pointerEvents: loading ? 'auto' : 'none' }}
    >
      <div className="flex flex-col items-center gap-5">
        <motion.img
          src={`${process.env.PUBLIC_URL}/jmh-logo.png`}
          alt="JMH"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-12 sm:h-14 w-auto"
        />

        <div className="w-48 h-1 bg-muted/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full bg-foreground rounded-full"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-muted-foreground font-mono tracking-wider"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};
