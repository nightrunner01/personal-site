'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string | ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-accent text-lg">{number}.</span>
        <h2 className="text-h1 font-display font-bold text-[var(--text)]">{title}</h2>
        <div className="flex-1 h-px bg-[var(--border)] ml-4 hidden md:block" />
      </div>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-sm md:text-base ml-10 font-mono">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
