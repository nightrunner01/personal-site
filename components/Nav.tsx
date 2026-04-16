'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Languages } from 'lucide-react';

export default function Nav() {
  const t = useTranslations('nav');
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sections = [
    { id: 'about', label: t('about') },
    { id: 'methodology', label: t('methodology') },
    { id: 'projects', label: t('projects') },
    { id: 'prds', label: t('prds') },
    { id: 'credentials', label: t('credentials') },
    { id: 'contact', label: t('contact') },
  ];

  // Swap locale in URL
  const otherLocale = locale === 'zh' ? 'en' : 'zh';
  const otherPath = locale === 'zh'
    ? (pathname === '/' ? '/en' : `/en${pathname}`)
    : pathname.replace(/^\/en/, '') || '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-lg bg-[var(--bg)]/80 border-b border-[var(--border)]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium text-[var(--text)] hover:text-accent transition-colors">
          <span className="text-accent">/</span>windychen
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="nav-link text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
            >
              <span className="text-accent font-mono mr-1">{String(i + 1).padStart(2, '0')}.</span>
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={otherPath}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface-alt)] transition-all"
            aria-label="Switch language"
          >
            <Languages size={14} />
            {locale === 'zh' ? 'EN' : '中'}
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded hover:bg-[var(--surface-alt)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
