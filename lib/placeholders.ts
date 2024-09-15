import { iLink } from "@/lib/types";
import {
  CheckCheckIcon,
  CircleAlertIcon,
  CircleXIcon,
  HomeIcon,
} from "lucide-react";

// LINK
export const sideLinks: iLink[] = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Important",
    href: "/important",
    icon: CircleAlertIcon,
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
