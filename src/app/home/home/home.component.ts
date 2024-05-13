import { Component, inject } from '@angular/core';
import { TodoFormComponent } from '../ui/todo-form.component';
import { Todo } from '../../shared/interfaces/todo.interface';
import { TodoService } from '../../shared/data-access/data.service';
import { TodoListComponent } from '../ui/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  todoService = inject(TodoService);

}
