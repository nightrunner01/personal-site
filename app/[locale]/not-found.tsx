import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">{t('nav.pageNotFound')}</h2>
        <p className="text-text-secondary mb-8">{t('nav.pageNotFoundDesc')}</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-accent text-bg font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          {t('nav.backToHome')}
        </Link>
      </div>
    </div>
  );
}
