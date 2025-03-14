
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbars/Navbars";
import { LoadingProvider} from "@/context/LoadingContext";
import GlobalLoader from "@/component/GlobalLoader";
import { ThemeProvider } from "@/context/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact | My primer Next.js",
  description: "curso Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider> 
          <LoadingProvider> 
            <Navbar />
            <GlobalLoader />
            {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
