import { TaskStatus } from "../../../../shared/ui/Task/Task";

export interface Task {
  task: string;
  status: TaskStatus;
  date: string;
}

export interface AdaptationSection {
  title: string;
  taskList: Task[];
}

export interface AdaptationListInt {
  link: string;
  total: number;
  completed: number;
  sections: AdaptationSection[]
}
