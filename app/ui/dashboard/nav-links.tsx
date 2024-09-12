"use client";

import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon, ariaLabel: "Go to Home" },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
    ariaLabel: "View Invoices",
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
    ariaLabel: "View Customers",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
            aria-label={link.ariaLabel}
          >
            <LinkIcon className="w-6" aria-hidden="true" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
