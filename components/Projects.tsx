'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink, Github, Star } from 'lucide-react';

type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  scale: string;
  period: string;
  flagship?: boolean;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  github?: string;
};

export default function Projects() {
  const t = useTranslations('projects');
  const items = t.raw('items') as ProjectItem[];
  const flagship = items.find((x) => x.flagship);
  const rest = items.filter((x) => !x.flagship);

  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading number="03" title={t('heading')} subtitle={t('subtitle')} />

      {/* Flagship */}
      {flagship && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 border border-accent bg-[var(--surface)] p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-accent text-[var(--bg)] px-4 py-1.5 flex items-center gap-1.5 text-xs font-mono font-semibold">
            <Star size={12} fill="currentColor" />
            {t('flagship_label')}
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-5">
              <div>
                <h3 className="text-h1 font-display font-bold text-[var(--text)] mb-1">
                  {flagship.title}
                </h3>
                <p className="text-[var(--text-secondary)]">{flagship.subtitle}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 font-mono text-xs text-[var(--text-tertiary)]">
                  <span>{flagship.role}</span>
                  <span className="text-accent">{flagship.scale}</span>
                  <span>{flagship.period}</span>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-relaxed">
                <div>
                  <span className="font-mono text-xs text-accent">PROBLEM</span>
                  <p className="text-[var(--text-secondary)] mt-1">{flagship.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-accent">SOLUTION</span>
                  <p className="text-[var(--text-secondary)] mt-1">{flagship.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {flagship.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2 py-1 bg-[var(--surface-alt)] text-[var(--text-secondary)] border border-[var(--border)]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {flagship.github && (
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-mono"
                >
                  <Github size={14} /> Source code <ExternalLink size={12} />
                </a>
              )}
            </div>

            <div className="md:col-span-2">
              <div className="space-y-3">
                <span className="font-mono text-xs text-accent">IMPACT</span>
                <div className="space-y-3">
                  {flagship.impact.map((m, idx) => (
                    <div
                      key={idx}
                      className="border-l-2 border-accent pl-4 py-1 bg-[var(--accent-dim)]"
                    >
                      <span className="numeric text-base font-semibold text-[var(--text)]">
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Rest - grid of cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {rest.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border border-[var(--border)] bg-[var(--surface)] p-6 card-hover group"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-h3 font-display font-semibold text-[var(--text)] group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <span className="font-mono text-xs text-[var(--text-tertiary)]">{p.period}</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-3">{p.subtitle}</p>

            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4 font-mono text-xs text-[var(--text-tertiary)]">
              <span>{p.role}</span>
              <span className="text-accent">·</span>
              <span>{p.scale}</span>
            </div>

            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-3">
              {p.solution}
            </p>

            {p.impact.length > 0 && (
              <div className="mb-4 pt-4 border-t border-[var(--border)]">
                <div className="flex flex-wrap gap-3">
                  {p.impact.slice(0, 3).map((m, idx) => (
                    <span key={idx} className="numeric text-xs text-accent">
                      ✓ {m}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] px-1.5 py-0.5 text-[var(--text-tertiary)] border border-[var(--border)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
