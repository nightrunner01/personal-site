'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type MethodItem = { title: string; subtitle: string; summary: string; detail: string };

export default function Methodology() {
  const t = useTranslations('methodology');
  // next-intl's useTranslations doesn't easily return arrays; we read the raw messages
  const items = t.raw('items') as MethodItem[];
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="methodology" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading number="02" title={t('heading')} subtitle={t('subtitle')} />

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group border border-[var(--border)] bg-[var(--surface)] p-6 card-hover cursor-pointer"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-h3 font-display font-semibold text-[var(--text)] mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-accent">{item.subtitle}</p>
              </div>
              <ChevronDown
                size={18}
                className={`text-[var(--text-tertiary)] transition-transform duration-300 ${
                  openIdx === i ? 'rotate-180' : ''
                }`}
              />
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.summary}</p>

            <motion.div
              initial={false}
              animate={{
                height: openIdx === i ? 'auto' : 0,
                opacity: openIdx === i ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
