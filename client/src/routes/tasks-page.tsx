import { useLoaderData } from "react-router-dom";

import { Task } from "../types";
import { fetchTasks } from "../api";

export const loader = async () => {
  try {
    const response = await fetchTasks();
    return response;
  } catch (error: any) {
    console.error(error.message);
  }
};

const TasksPage: React.FC = () => {
  const fetchedTasks = useLoaderData() as Task[];
  console.log(fetchedTasks);

  return (
    <div>
      <h1>Tasks Page</h1>
      {fetchedTasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};

export default TasksPage;
