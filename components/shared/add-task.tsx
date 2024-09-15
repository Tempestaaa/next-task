"use client";

import Add from "@/components/modals/add";
import { Card, CardContent } from "@/components/ui/card";
import { Context } from "@/provider/provider";
import { PlusIcon } from "lucide-react";
import { useContext } from "react";

export default function AddTask() {
  const openModal = useContext(Context);

  return (
    <>
      <Card
        onClick={() => openModal?.setIsAddModalOpen(true)}
        className="bg-transparent border-2 border-dashed border-gray-600 grid place-items-center *:text-gray-600 group hover:border-primary-foreground duration-300 *:duration-300 cursor-pointer h-[303.2px]"
      >
        <CardContent className="text-sm flex flex-col items-center group-hover:text-primary-foreground py-6">
          <PlusIcon size={32} />
          <span>Add more tasks...</span>
        </CardContent>
      </Card>

      {/* Task modal - add */}
      {openModal?.isAddModalOpen && <Add />}
    </>
  );
}
