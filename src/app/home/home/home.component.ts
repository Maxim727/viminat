import { Component } from '@angular/core';
import { TodoFormComponent } from '../ui/todo-form.component';
import { Todo } from '../../shared/interfaces/todo.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  createTodo(todo: Todo){
    console.log(todo);
  }
}
