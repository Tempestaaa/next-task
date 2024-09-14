"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftToLineIcon } from "lucide-react";
import { useState } from "react";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleClick}>
      <ArrowLeftToLineIcon
        className={`transition-transform duration-300 ${
          isOpen && "rotate-180"
        }`}
      />
    </Button>
  );
}
