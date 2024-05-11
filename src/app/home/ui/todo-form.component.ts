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
import { Todo } from '../../shared/interfaces/todo.interface';

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
  @Output() todoSubmitted = new EventEmitter<Todo>();
  private fb = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });

}
