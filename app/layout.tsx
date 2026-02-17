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

export const metadata: Metadata = {
  metadataBase: new URL("https://closerapp.app"),
  title: "Closer — Made for the moments that matter",
  description:
    "Closer helps university students meet friends in person. Go live on the campus map, get paired with someone nearby, and meet face-to-face in minutes.",
  openGraph: {
    title: "Closer — Made for the moments that matter",
    description:
      "Meet real people on campus, right now. Closer gets you face-to-face with someone nearby in minutes.",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Closer — Real connection starts in person",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Closer — Made for the moments that matter",
    description:
      "Meet real people on campus, right now. Closer gets you face-to-face with someone nearby in minutes.",
    images: ["/images/og-image.png"],
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
