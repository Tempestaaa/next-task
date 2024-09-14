import { Button } from "@/components/ui/button";
import { SettingsIcon } from "lucide-react";
import Image from "next/image";

export default function Controller() {
  return (
    <article className="flex items-center justify-between gap-4 border-t-2 border-gray-600 pt-4 mt-auto">
      <section className="flex gap-4">
        <figure>
          <Image
            src="/user_profile.jpg"
            alt="avatar"
            width={36}
            height={36}
            quality={100}
            className="rounded-full"
          />
        </figure>
        <div className="text-sm">
          <p className="font-bold">@Username</p>
          <p className="text-gray-500 text-xs">Fullname</p>
        </div>
      </section>

      <section>
        <Button
          variant="ghost"
          size="icon"
          className="grid place-items-center group rounded-full"
        >
          <SettingsIcon />
        </Button>
      </section>
    </article>
  );
}
