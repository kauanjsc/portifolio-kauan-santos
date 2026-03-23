import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kauan Santos | Dev',
  description:
    'Desenvolvedor de Software Júnior focado em criar aplicações web modernas, acessíveis e eficientes.',
  keywords: [
    'Desenvolvedor de Software',
    'Desenvolvedor Júnior',
    'Vue.js',
    'Next.js',
    'TypeScript',
    'FastAPI',
    'Acessibilidade Web',
    'Tailwind CSS',
    'Kauan Santos',
  ],
  authors: [{ name: 'Kauan Santos' }],
  creator: 'Kauan Santos',
  
  icons: {
    icon: '/favicondev2.ico',
    shortcut: '/favicondev2.ico',
    apple: '/favicondev2.ico',
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://portifolio-kauan-santos.vercel.app/',
    title: 'Kauan Santos',
    description:
      'Portfólio de Kauan Santos. Construindo soluções digitais acessíveis e de alto desempenho.',
    siteName: 'Kauan Santos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kauan Santos </> Desenvolvedor Full Stack',
    description: 'Construindo soluções digitais acessíveis e de alto desempenho.',
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
        {/* Cor da barra de endereços no mobile (Azul Brand-500) */}
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="font-body antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}