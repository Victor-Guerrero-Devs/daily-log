import TaskItem from "./TaskItem";
import { Task } from "../types";

type Props = {
  tasks: Task[];
};

const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
