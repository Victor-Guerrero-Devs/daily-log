import { Task } from "../types";

type Props = {
  task: Task;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const date = new Date(task.date_added);
  const readableDate = date.toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-slate-200 p-4">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-sm">Category: {task.category_name}</p>
      <p className="text-sm">Programming Language: {task.language}</p>
      <p className="text-sm">Date Added: {readableDate}</p>
    </article>
  );
};

export default TaskItem;
