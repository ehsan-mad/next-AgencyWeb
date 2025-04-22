
import NavbarDemo from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <NavbarDemo />
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
