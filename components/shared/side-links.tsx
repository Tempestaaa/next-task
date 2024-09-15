"use client";

import { sideLinks } from "@/lib/placeholders";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideLinks() {
  const pathname = usePathname();
  const active = (url: string) => pathname === url;

  return (
    <div>
      {sideLinks.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.name}
            className={`flex items-center justify-between gap-2 py-3 px-4 rounded-md group duration-300 *:duration-300 ${
              active(item.href) && "bg-primary-foreground text-sky-600"
            }`}
          >
            <div
              className={`flex items-center gap-4 ${
                active(item.href) && "font-bold"
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </div>
            <ChevronRightIcon
              className={`group-hover:opacity-100 opacity-0 group-hover:block hidden ${
                active(item.href) && "!block opacity-100"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
