export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface DashboardData {
  layout: string[];
  notes: string;
  tasks: Task[];
}

export interface UserData {
  [email: string]: DashboardData;
}

export type WidgetType = 'weather' | 'notes' | 'tasks';
