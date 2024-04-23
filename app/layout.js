import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yum yum delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full min-h-screen grid grid-rows-[4rem_auto]">
          <Header />
          <div className="bg-primary-100/70">
          {children}
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
