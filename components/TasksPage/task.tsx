//interface TaskProps extends React.HTMLAttributes<HTMLDivElement> {}
import { Circle } from "lucide-react";

export default function Task() {
  return (
    <div className="flex bg-violet-900 rounded-lg p-4">
      <button>
        <Circle></Circle>
      </button>
      <p>Task Desc</p>
    </div>
  );
}
