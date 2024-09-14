import { Separator } from "@/components/ui/separator";
import Logo from "@/components/shared/logo";
import MenuButton from "@/components/shared/menu-button";
import SideLinks from "@/components/shared/side-links";
import Controller from "@/components/shared/controller";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-4">
      <div>
        <div className="flex justify-between">
          <Logo />
          <MenuButton />
        </div>
        <Separator className="mt-8 mb-4" />
        <SideLinks />
      </div>

      <Controller />
    </nav>
  );
}
