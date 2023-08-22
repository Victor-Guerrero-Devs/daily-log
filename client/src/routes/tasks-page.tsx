import { useLoaderData } from "react-router-dom";

import TasksList from "../components/TasksList";
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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl text-center font-black">Tasks Page</h1>
      <TasksList tasks={fetchedTasks} />
    </div>
  );
};

export default TasksPage;
