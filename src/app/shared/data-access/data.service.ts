import { Injectable, signal } from '@angular/core';
import { CreateTodo, Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // We only want this class to be able to
  // update the signal (# makes it private)
  #todos = signal<Todo[]>([]);

  // This can be read publicly
  todos = this.#todos.asReadonly();

  addTodo(todo: CreateTodo) {
    console.log(typeof todo);
    this.#todos.update((todos) => [
      ...todos,
      { ...todo, id: Date.now().toString() },
    ]);
  }

  deleteTodo() {
    this.#todos.set([]);
  }
}
