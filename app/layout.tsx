import NavbarDemo from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          
          <NavbarDemo />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
