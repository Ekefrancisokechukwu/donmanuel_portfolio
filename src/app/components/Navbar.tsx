"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLink } from "../../../utils/Links";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul className="flex  items-center gap-[68px]">
        {navLink.map((link, i) => {
          const isActive = pathname === link.url;
          return (
            <li
              key={i}
              className={`nav-list ${isActive ? "after:w-full" : null}`}
            >
              <Link
                className="first-letter:capitalize  inline-block"
                href={link.url}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
