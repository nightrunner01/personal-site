'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('contact');

  return (
    <footer className="border-t border-[var(--border)] py-10 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs text-[var(--text-tertiary)]">
        <div>
          <span>© {new Date().getFullYear()} Windy Chen · 陈晓峰</span>
        </div>
        <div>{t('footer')}</div>
      </div>
    </footer>
  );
}
