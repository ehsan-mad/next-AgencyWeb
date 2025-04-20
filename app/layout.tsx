
import { NavbarDemo } from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/footer";



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
        <Footer/>
      </body>
    </html>
  );
}
