
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ReactNode } from "react"; // Import ReactNode for typing

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", '700', "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Foodi",
  description: "Created Foodi Resturants Website",
};
interface RootLayoutProps {
  children: ReactNode; // Typing the children prop as ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
          <Footer />
        </PageTransition>
        
      </body>
    </html>
  );
}
