import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Operate-technology",
  description: "Operate-technology landing-page clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-work-sans), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
