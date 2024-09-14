import Task from "@/components/shared/task";

export default function InCompletePage() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {[...Array(50)].map((_, item) => (
        <Task key={item} item={item} />
      ))}
    </div>
  );
}
