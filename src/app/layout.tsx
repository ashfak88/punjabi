import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FFF8F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ramjot & Kishandeep • Royal Wedding",
  description: "You are joyfully invited to the sacred Anand Karaj and Wedding Celebration of Ramjot Kaur & Kishandeep Singh on Friday, 4 December 2026.",
  keywords: "Ramjot Kishandeep wedding, Sikh Punjabi wedding invitation, digital Anand Karaj invitation, luxury wedding app, WhatsApp digital card",
  openGraph: {
    title: "Ramjot & Kishandeep • Royal Wedding",
    description: "Witness the sacred union of Ramjot & Kishandeep on Friday, 4 December 2026.",
    url: "https://ramjot-and-kishandeep-wedding.invitation/2026",
    siteName: "Ramjot & Kishandeep Wedding Celebration",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ramjot & Kishandeep Royal Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: Readonly<React.ReactNode>;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar" suppressHydrationWarning>
      <body
        className="font-poppins bg-[#001F3F] text-[#1A1A1A] antialiased selection:bg-[#F2A900] selection:text-white min-h-screen flex flex-col items-center justify-start"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
