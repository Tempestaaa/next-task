import AddTask from "@/components/shared/add-task";
import Header from "@/components/shared/header";
import Task from "@/components/shared/task";

export default function Home() {
  return (
    <main className="space-y-8">
      <Header title="All Tasks" />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {[...Array(4)].map((_, item) => (
          <Task key={item} item={item} />
        ))}
        <AddTask />
      </div>
    </main>
  );
}
