import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PenBoxIcon, Trash2Icon } from "lucide-react";

interface Props {
  item: number;
}

export default function Task({ item }: Props) {
  return (
    <Card className="shadow-sm shadow-primary-foreground">
      <CardHeader>
        <Badge
          variant="custom"
          className="text-xs w-fit ml-auto cursor-default"
        >
          Active
        </Badge>
        <CardTitle className="text-lg">Title {item + 1}</CardTitle>
        <CardDescription>Description {item + 1}</CardDescription>
      </CardHeader>

      <CardContent className="text-sm line-clamp-5 py-0">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nostrum
        corporis numquam necessitatibus consequuntur, ullam aliquam vero
        exercitationem at. Consequuntur facere impedit quibusdam deleniti
        aliquid sequi doloribus unde quaerat? Architecto.
      </CardContent>

      <CardFooter className="mt-4 space-x-4">
        <Button size="sm" variant="destructive">
          <Trash2Icon size={16} />
        </Button>
        <Button size="sm" variant="custom">
          <PenBoxIcon size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
}
