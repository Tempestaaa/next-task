import { iLink } from "@/lib/types";
import { CheckCheckIcon, CircleXIcon, HomeIcon } from "lucide-react";

// LINK
export const sideLinks: iLink[] = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Complete",
    href: "/complete",
    icon: CheckCheckIcon,
  },
  {
    name: "Incomplete",
    href: "/incomplete",
    icon: CircleXIcon,
  },
];
