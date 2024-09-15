import Header from "@/components/shared/header";
import Task from "@/components/shared/task";

export default function ImportantPage() {
  return (
    <section className="space-y-8">
      <Header title="Important Tasks" />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {[...Array(4)].map((_, item) => (
          <Task key={item} item={item} />
        ))}
      </div>
    </section>
  );
}
