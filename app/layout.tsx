import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, AnimateScript } from "@/components";

// Import font IBM Plex Mono
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-mono",
  display: "swap",
});

// Import font IBM Plex Sans
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dducnv.github.io"),
  title: {
    default: "Nguyễn Văn Đức - Mobile App Developer",
    template: "%s | Nguyễn Văn Đức",
  },
  description: "Lập trình viên Flutter chuyên phát triển ứng dụng di động Android & iOS. Xem các dự án và blog chia sẻ kinh nghiệm tại đây.",
  keywords: [
    "Nguyễn Văn Đức",
    "Mobile App Developer",
    "Flutter Developer",
    "Dart",
    "Android",
    "iOS",
    "Ứng dụng di động",
    "Portfolio",
    "Blog lập trình",
    "Flutter App",
  ],
  authors: [
    {
      name: "Nguyễn Văn Đức",
      url: "https://dducnv.github.io",
    },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-96x96.png", sizes: "96x96" },
    ],
  },
  openGraph: {
    title: "Nguyễn Văn Đức - Mobile App Developer",
    description: "Lập trình viên Flutter chuyên về Android & iOS. Xem các dự án và blog tại đây.",
    url: "https://dducnv.github.io",
    siteName: "dducnv.github.io",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://dducnv.github.io/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Nguyễn Văn Đức",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nvduc_0712",
    creator: "@nvduc_0712",
    title: "Nguyễn Văn Đức - Mobile App Developer",
    description: "Lập trình viên Flutter chuyên phát triển ứng dụng di động Android & iOS.",
    images: [
      {
        url: "https://dducnv.github.io/avatar.jpg",
        alt: "Nguyễn Văn Đức",
      },
    ],
  },
  verification: {
    google: "esj5hkXZdliPhTYEN29wV6Lf381DaHrEXXzzrytQu2k",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dducnv.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} font-sans antialiased relative`}>
        <Navbar />
        <AnimateScript/>
        {children}
        <Footer />
      
      </body>
    </html>
  );
}