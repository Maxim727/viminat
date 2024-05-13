export interface Todo {
  title: string;
  description: string;
  id: string;
}

export type CreateTodo = Omit<Todo, 'id'>;
