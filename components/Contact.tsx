'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Mail, Phone, Github, MapPin } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');

  const items = [
    { icon: Mail, label: t('email_label'), value: t('email'), href: `mailto:${t('email')}` },
    { icon: Phone, label: t('phone_label'), value: t('phone'), href: `tel:${t('phone')}` },
    { icon: Github, label: t('github_label'), value: t('github'), href: `https://${t('github')}` },
    { icon: MapPin, label: 'Location', value: t('location') },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <SectionHeading number="06" title={t('heading')} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
          {t('subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-start gap-4 p-5 border border-[var(--border)] bg-[var(--surface)] card-hover h-full">
                <Icon size={18} className="text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
                <div className="min-w-0">
                  <div className="font-mono text-xs text-[var(--text-tertiary)] uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-[var(--text)] break-all">{item.value}</div>
                </div>
              </div>
            );

            return item.href ? (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="block"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
