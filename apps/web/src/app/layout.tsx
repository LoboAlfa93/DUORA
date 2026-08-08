import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'DUORA | Conecta. Vive. Comparte.',
  description: 'Conexiones que empiezan con una experiencia real.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
