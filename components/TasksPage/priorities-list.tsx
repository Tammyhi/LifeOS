import Priority from "@/components/TasksPage/priority";
import { Plus } from "lucide-react";

interface PrioritiesListProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function PrioritiesList({ className }: PrioritiesListProps) {
  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <p className="uppercase mb-4">priorities</p>
        <Plus></Plus>
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <Priority></Priority>
        </li>
        <li>
          <Priority></Priority>
        </li>
      </ul>
    </section>
  );
}
