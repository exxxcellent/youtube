// types
import type { Metadata } from "next";
// fonts
import { Roboto } from "next/font/google";
// global css
import "./globals.css";
// components
import Header from "@/components/Header/Header";

const roboto = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
    title: "YouTube",
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
                {children}
            </body>
        </html>
    );
}
