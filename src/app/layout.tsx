import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactLenis } from 'lenis/react'
import { ThemeProvider } from "@/components/providers/theme-provider";
import { InView } from "@/components/ui/in-view";
import IntroHeader from "@/components/shared/intro-header";
import Footer from "@/components/shared/footer";
import ClientLayout from "@/components/shared/client-layout";
import { ThemeSwitcher } from "@/components/button/theme-switcher";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitmondal.com"), // Update with your actual domain
  title: {
    default: "Rohit Mondal | Portfolio",
    template: "%s | Rohit Mondal",
  },
  description: "Personal portfolio of Rohit Mondal, a passionate software developer specializing in modern web technologies and building scalable applications.",
  keywords: ["Rohit Mondal", "Portfolio", "Web Developer", "Software Engineer", "Frontend Developer", "Full Stack", "React", "Next.js"],
  authors: [{ name: "Rohit Mondal", url: "https://rohitmondal.com" }],
  creator: "Rohit Mondal",
  publisher: "Rohit Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohitmondal.com",
    title: "Rohit Mondal | Portfolio",
    description: "Personal portfolio of Rohit Mondal, a passionate software developer specializing in modern web technologies.",
    siteName: "Rohit Mondal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Mondal | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Mondal | Portfolio",
    description: "Personal portfolio of Rohit Mondal, a passionate software developer specializing in modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@rohitmondal", // Update with your actual Twitter/X handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rohitmondal.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReactLenis root />
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased lg:max-w-4xl md:max-w-full mx-auto scroll-smooth`}>
        <ClientLayout>
          <ThemeProvider
            defaultTheme="dark"
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <main className="mx-4 mb-16 lg:mb-40 mt-2 sm:mt-12 space-y-16">
              <InView variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}>
                <IntroHeader />
              </InView>
              {children}
            </main>
            <Footer />
            {/* Fixed floating theme toggle — always visible on all screen sizes */}
            <div className="fixed bottom-5 right-5 z-50">
              <ThemeSwitcher />
            </div>
          </ThemeProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
