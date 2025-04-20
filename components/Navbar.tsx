"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export default function NavbarComponent() {
  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 flex flex-row items-center justify-end gap-2">
          <NavbarButton as={Link} href="/login" variant="secondary">Login</NavbarButton>
          <NavbarButton as={Link} href="/book" variant="primary">Book a call</NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-${idx}`}
              href={item.link}
              className="w-full rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex w-full flex-col gap-4">
            <NavbarButton
              as={Link}
              href="/login"
              onClick={() => setIsOpen(false)}
              variant="secondary"
              className="w-full"
            >
              Login
            </NavbarButton>
            <NavbarButton
              as={Link}
              href="/book"
              onClick={() => setIsOpen(false)}
              variant="primary"
              className="w-full"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
