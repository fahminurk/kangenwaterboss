import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";
import { notFound } from "next/navigation";
import WhatsappToggle from "@/components/WhatsappToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enagic Kangen Water Boss",
  description: "Enagic Kangen Water Boss - Change your water, change your life",
  keywords: "",
  authors: [{ name: "fahmi nurkamil", url: "https://github.com/fahminurk" }],
  openGraph: {
    type: "website",
    title: "Enagic Kangen Water Boss",
    description:
      "Enagic Kangen Water Boss - Change your water, change your life",
    url: "https://kangenwaterboss.com",
    siteName: "Enagic Kangen Water Boss",
    images: {
      url: "https://i.ibb.co/bJbgRdf/enagicog.png",
    },
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }
  const msg = useMessages();

  return (
    <html lang={locale}>
      <Toaster />
      <NextIntlClientProvider locale={locale} messages={msg}>
        <body className={`${inter.className}`}>
          <Navbar locale={locale} />
          <WhatsappToggle />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
