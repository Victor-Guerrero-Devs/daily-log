import axios, { AxiosResponse, AxiosError } from "axios";
import { Task } from "../types";

const fetchTasks = async (): Promise<Task[]> => {
  try {
    const res: AxiosResponse<Task[]> = await axios.get(
      "http://localhost:3536/tasks"
    );
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError; // Explicitly cast the error
    if (axiosError.response) {
      console.log("Response status:", axiosError.response.status);
      console.log("Response data:", axiosError.response.data);
    } else if (axiosError.request) {
      console.log("No response received:", axiosError.request);
    } else {
      console.log("Error:", axiosError.message);
    }
    throw axiosError;
  }
};

export { fetchTasks };
