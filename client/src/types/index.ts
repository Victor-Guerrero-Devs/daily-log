export interface Task {
  id: number;
  title: string;
  description: string;
  category: number;
  category_name: string;
  date_added: Date;
  is_completed: boolean;
  language: string;
}
