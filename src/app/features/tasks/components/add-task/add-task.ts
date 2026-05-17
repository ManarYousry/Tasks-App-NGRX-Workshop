import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as TaskActions from '../../store/tasks.actions';
import { Task } from '../../task.model';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
   private _store = inject(Store);
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    user: new FormControl('Manar'),
    completed: new FormControl(false),
  });

  submit() {
    if (this.form.valid) {
      // console.log('Emitting new task title:', this.form.value.title);
          this._store.dispatch(TaskActions.createTask({ task: this.form.value  as Task}));
        
    }
  }
}
