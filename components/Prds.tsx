'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FileText, ArrowUpRight } from 'lucide-react';

type PrdItem = { id: string; title: string; pages: string; date: string };

export default function Prds() {
  const t = useTranslations('prds');
  const items = t.raw('items') as PrdItem[];

  return (
    <section id="prds" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading number="04" title={t('heading')} subtitle={t('subtitle')} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((prd, i) => (
          <motion.a
            key={prd.id}
            href={`/prds/${prd.id}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group border border-[var(--border)] bg-[var(--surface)] p-5 card-hover relative overflow-hidden block"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={16} className="text-accent" />
            </div>

            <FileText size={28} className="text-accent mb-4" strokeWidth={1.5} />

            <h3 className="text-sm font-semibold text-[var(--text)] mb-2 leading-snug">
              {prd.title}
            </h3>

            <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-tertiary)]">
              <span>{prd.pages}</span>
              <span>·</span>
              <span>{prd.date}</span>
            </div>
          </motion.a>
        ))}
      </div>

      <p className="mt-6 text-center font-mono text-xs text-[var(--text-tertiary)]">
        {t('note')}
      </p>
    </section>
  );
}
