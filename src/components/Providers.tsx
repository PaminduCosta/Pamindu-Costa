"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { LoadingProvider } from "@/context/LoadingContext";
import { LoadingScreen } from "@/components/LoadingScreen";

export function Providers({
    children,
    messages,
    locale,
    timeZone
}: {
    children: React.ReactNode;
    messages: AbstractIntlMessages;
    locale: string;
    timeZone: string;
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange={false}
        >
            <NextIntlClientProvider messages={messages} locale={locale} timeZone={timeZone}>
                <LoadingProvider>
                    <LoadingScreen />
                    {children}
                </LoadingProvider>
            </NextIntlClientProvider>
        </ThemeProvider>
    );
}
