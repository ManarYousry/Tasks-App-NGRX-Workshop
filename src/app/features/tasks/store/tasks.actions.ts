import { createAction, props } from '@ngrx/store';
import { Task, TaskFilter } from '../task.model';

export const loadTasks = createAction('[Tasks] Load');

export const loadTasksSuccess = createAction('[Tasks] Load Success', props<{ tasks: Task[]}>());

export const loadTasksFailure = createAction('[Tasks] Load Failure', props<{ error: string }>());

export const createTask = createAction('[Tasks] Create' , props<{ task: Task}>());
export const createTaskSuccess = createAction('[Tasks] Create Success', props<{ task: Task}>());

export const createTaskFailure = createAction(
  '[Tasks] Create Failure',
  props<{ error: string }>(),
);


export const deleteTask = createAction('[Tasks] Delete' , props<{ _id: string}>());
export const deleteTaskSuccess = createAction('[Tasks] Delete Success',  props<{ _id: string}>());
export const deleteTaskFailure = createAction(
  '[Tasks] Delete Failure',
  props<{ error: string }>(),
);
export const toggleTask = createAction(
  '[Tasks] Toggle',
  props<{ _id: string; currCompleted: boolean }>(),
);

export const toggleTasksSuccess = createAction('[Tasks] Toggle Success', props<{ task: Task }>());

export const toggleTasksFailure = createAction(
  '[Tasks] Toggle Failure',
  props<{ error: string }>(),
);



export const setFilter = createAction("[Tasks] Set Filter",props<{filter:TaskFilter}>());
