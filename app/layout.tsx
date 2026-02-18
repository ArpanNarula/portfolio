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
  title: "Arpan Narula | Full Stack Developer",
  description:
    "Portfolio of Arpan Narula — Full Stack Developer, NSUT student, SIH Semi-Finalist. Projects in GenAI, dashboards, and web applications.",

  keywords: [
    "Arpan Narula",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "NSUT",
    "Smart India Hackathon",
    "GenAI Projects",
  ],

  authors: [{ name: "Arpan Narula" }],

  openGraph: {
    title: "Arpan Narula | Portfolio",
    description:
      "Full Stack Developer | SIH Semi-Finalist | Projects in GenAI, AI dashboards & web development.",
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
    title: "Arpan Narula | Portfolio",
    description:
      "Full Stack Developer | NSUT | SIH Semi-Finalist — Projects in GenAI and Web Development.",
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
