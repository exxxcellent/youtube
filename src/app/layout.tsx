// types
import type { Metadata } from 'next';
// fonts
import { Roboto } from 'next/font/google';
// global styles
import './globals.scss';
// widgets
import Header from '@/widgets/Header/Header';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'YouTube | Главная',
    description: 'This application is copy of youtube.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={roboto.className}>
                <Header />
                <main className="main">
                    <div className="page">{children}</div>
                </main>
            </body>
        </html>
    );
}
