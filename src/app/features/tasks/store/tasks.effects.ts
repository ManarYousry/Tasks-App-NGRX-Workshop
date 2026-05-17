import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskServices } from '../services/task-services';
import * as TaskActions from './tasks.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class TasksEffects {
  private actions$ = inject(Actions);
  private _taskServices = inject(TaskServices);

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      switchMap(() =>
        this._taskServices.getTasks().pipe(
          tap((res) => console.log('Tasks fetched successfully:', res)),
          map((res) => TaskActions.loadTasksSuccess({ tasks: res })),
          catchError((error) => of(TaskActions.loadTasksFailure({ error }))),
        ),
      ),
    );
  });

  toggleTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.toggleTask),
      switchMap((params) =>
        this._taskServices.toggleTaskCompletion(params._id, !params.currCompleted).pipe(
          tap((res) => console.log('Tasks updated successfully:', res)),
          map((res) => TaskActions.toggleTasksSuccess({ task: res })),
          catchError((error) => of(TaskActions.toggleTasksFailure({ error }))),
        ),
      ),
    );
  });

  createTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.createTask),
      switchMap((params) =>
        this._taskServices.createTask(params.task).pipe(
          tap((res) => console.log('Tasks Created successfully:', res)),
          map((res) => TaskActions.createTaskSuccess({ task: res })),
          catchError((error) => of(TaskActions.createTaskFailure({ error }))),
        ),
      ),
    );
  });
   deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      switchMap((params) =>
        this._taskServices.deleteTask(params._id).pipe(
          tap((res) => console.log('Tasks deleted successfully:', res)),
          map(() => TaskActions.deleteTaskSuccess({ _id: params._id })),
          catchError((error) => of(TaskActions.deleteTaskFailure({ error }))),
        ),
      ),
    );
  });
}
