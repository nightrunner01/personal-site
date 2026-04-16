'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Award, ScrollText, GraduationCap } from 'lucide-react';

type CredItem = { title: string; detail: string };
type CredCategory = { label: string; items: CredItem[] };

export default function Credentials() {
  const t = useTranslations('credentials');
  const cats = t.raw('categories') as {
    patents: CredCategory;
    certifications: CredCategory;
    awards: CredCategory;
  };

  const categories = [
    { key: 'patents', icon: ScrollText, data: cats.patents },
    { key: 'certifications', icon: Award, data: cats.certifications },
    { key: 'awards', icon: GraduationCap, data: cats.awards },
  ];

  return (
    <section id="credentials" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading number="05" title={t('heading')} />

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[var(--border)]">
                <Icon size={18} className="text-accent" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-[var(--text)]">
                  {cat.data.label}
                </h3>
              </div>

              <div className="space-y-5">
                {cat.data.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="text-sm font-semibold text-[var(--text)] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
