import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ SEO + LinkedIn Preview Metadata */
export const metadata: Metadata = {
  metadataBase: new URL("https://arpan-narula-portfolio.vercel.app"),
  title: "Arpan Narula | Backend Developer",
  description:
    "Portfolio of Arpan Narula — Backend Developer focused on scalable APIs, backend systems, data modeling, and real-world application architecture.",

  keywords: [
    "Arpan Narula",
    "Backend Developer",
    "Node.js Developer",
    "REST API Developer",
    "MongoDB Developer",
    "System Design Portfolio",
    "Next.js Portfolio",
    "NSUT",
    "Smart India Hackathon",
    "Backend Systems",
  ],

  authors: [{ name: "Arpan Narula" }],

  openGraph: {
    title: "Arpan Narula | Backend Developer Portfolio",
    description:
      "Backend Developer building scalable APIs, data systems, and backend logic for real-world applications.",
    url: "https://arpan-narula-portfolio.vercel.app", // change after final domain
    siteName: "Arpan Portfolio",
    images: [
      {
        url: "/preview.png", // we will add this image in public/
        width: 1200,
        height: 630,
        alt: "Arpan Narula Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arpan Narula | Backend Developer Portfolio",
    description:
      "Backend Developer | APIs, data systems, application architecture, and AI-powered backend workflows.",
    images: ["/preview.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
