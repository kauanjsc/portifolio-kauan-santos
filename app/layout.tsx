import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kauan Santos — Desenvolvedor Full Stack',
  description:
    'Desenvolvedor Full Stack com foco em Front-End (Vue.js/Next.js). Especialista em criar interfaces modernas e acessíveis.',
  keywords: [
    'Desenvolvedor Front-End',
    'Vue.js',
    'Next.js',
    'Acessibilidade Web',
    'TypeScript',
    'FastAPI',
    'Tailwind CSS',
    'Kauan Santos',
  ],
  authors: [{ name: 'Kauan Santos' }],
  creator: 'Kauan Santos',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kauanjscardoso@gmail.com',
    title: 'Kauan Santos — Front-End & Acessibilidade',
    description:
      'Portfólio de Kauan Santos. Construindo soluções digitais modernas e eficientes.',
    siteName: 'Kauan Santos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kauan Santos — Desenvolvedor Full Stack',
    description: 'Construindo soluções digitais modernas e eficientes.',
    creator: '@kauanjsc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080810" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
