import Task from "@/components/TasksPage/task";
import { Plus } from "lucide-react";
interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function TaskList({ className }: TaskListProps) {
  return (
    <section className={`${className}`}>
      <p className="uppercase mb-4">Tasks</p>
      <ul className="flex flex-col gap-4 mb-4">
        <li>
          <Task></Task>
        </li>
        <li>
          <Task></Task>
        </li>
      </ul>
      <div className="flex bg-violet-950 rounded-lg p-4">
        <button>
          <Plus></Plus>
        </button>
        <p>Task to Add</p>
      </div>
    </section>
  );
}
