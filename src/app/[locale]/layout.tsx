import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Sinhala } from "next/font/google";
import { getMessages } from 'next-intl/server';
import { Providers } from "@/components/Providers";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const notoSinhala = Noto_Sans_Sinhala({
    variable: "--font-noto-sinhala",
    subsets: ["sinhala"],
});

export const metadata: Metadata = {
    title: "Pamindu Costa",
    description: "A stunning portfolio website with Glassmorphism 2.0 design",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${geistSans.variable} ${geistMono.variable} ${notoSinhala.variable} antialiased`}
            >
                <Providers messages={messages} locale={locale} timeZone="Asia/Colombo">
                    {children}
                </Providers>
            </body>
        </html>
    );
}
