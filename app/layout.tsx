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
  title: "Arpan Narula | Developer",
  description:
    "Portfolio of Arpan Narula — developer building web apps, APIs, dashboards, and product-focused software.",

  keywords: [
    "Arpan Narula",
    "Software Developer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "Node.js Developer",
    "React Developer",
    "Portfolio Website",
    "NSUT",
    "Smart India Hackathon",
    "Developer Portfolio",
  ],

  authors: [{ name: "Arpan Narula" }],

  openGraph: {
    title: "Arpan Narula | Developer Portfolio",
    description:
      "Developer portfolio with projects in web apps, APIs, product ideas, dashboards, and AI-powered tools.",
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
    title: "Arpan Narula | Developer Portfolio",
    description:
      "Developer portfolio with full stack projects, APIs, dashboards, and product-focused work.",
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
