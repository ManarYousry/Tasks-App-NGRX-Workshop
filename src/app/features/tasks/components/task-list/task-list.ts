import { Component, inject, input, OnInit, output } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../task.model';
import { Store } from '@ngrx/store';
import * as TaskSelectors from '../../store/tasks.selectors';
import * as TaskActions from '../../store/tasks.actions';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard, AsyncPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {
  private _store = inject(Store);
  tasks$!: Observable<Task[]>;
  // --------

  getTasks() {
    this.tasks$ = this._store.select(TaskSelectors.selectFilteredTasks);
  }

  loadTasks() {
    this._store.dispatch(TaskActions.loadTasks());
  }

  onToggleTask(event: any) {
    const taskId = event._id;
    const completed = event.completed;
    this._store.dispatch(TaskActions.toggleTask({ _id: taskId, currCompleted: completed }));
  }

    deleteTask(event: any) {
    const taskId = event._id;
    this._store.dispatch(TaskActions.deleteTask({ _id: taskId}));
  }

  // ---- Life Cycles Methods ----
  ngOnInit(): void {
    this.loadTasks();
    this.getTasks();
  }
}
