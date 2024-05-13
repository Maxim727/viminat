import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CreateTodo, Todo } from '../../shared/interfaces/todo.interface';
import { TodoService } from '../../shared/data-access/data.service';

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form
      [formGroup]="todoForm"
      (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())"
    >
      <div style="margin-bottom: 20px;">
        <p-inputGroup>
          <p-inputGroupAddon>
            <i class="pi pi-pencil"></i>
          </p-inputGroupAddon>
          <input
            pInputText
            type="text"
            formControlName="title"
            placeholder="title..."
          />
        </p-inputGroup>
      </div>

      <div style="margin-bottom: 20px;">
        <p-inputGroup>
          <p-inputGroupAddon>
            <i class="pi-address-book"></i>
          </p-inputGroupAddon>
          <input
            pInputText
            type="text"
            formControlName="description"
            placeholder="description..."
          />
        </p-inputGroup>
      </div>

      <p-button
        [disabled]="!todoForm.valid"
        type="submit"
        label="Add todo "
        icon="pi pi-check"
        iconPos="right"
      />

      <p-button
        (onClick)="todoService.deleteTodo()"
        [style]="{'margin-left': '10px'}"
        type="button"
        label="Clear all"
        icon="pi pi-times-circle"
        iconPos="right"
        severity="danger"
      />
    </form>
  `,
  imports: [
    FormsModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
})
export class TodoFormComponent {
  @Output() todoSubmitted = new EventEmitter<CreateTodo>();
  private fb = inject(FormBuilder);
  public todoService = inject(TodoService);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
