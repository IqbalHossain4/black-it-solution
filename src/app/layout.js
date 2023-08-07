import Navber from "@/components/Navber/Navber";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import SubNavber from "@/components/SubNavber/SubNavber";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Black-IT-Solution",
  description: "Manage Business IT Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SubNavber />
        <Navber />
        {children}

        <Footer />
      </body>
    </html>
  );
}
