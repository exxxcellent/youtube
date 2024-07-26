// types
import type { Metadata } from 'next';
// fonts
import { Roboto } from 'next/font/google';
// global styles
import './globals.scss';
// widgets
import Header from '@/widgets/Header/Header';
import Nav from '@/widgets/Nav/Nav';
import MobileNav from '@/widgets/MobileNav/MobileNav';

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
                    <Nav />
                    <div className="page">{children}</div>
                    <MobileNav />
                </main>
            </body>
        </html>
    );
}
