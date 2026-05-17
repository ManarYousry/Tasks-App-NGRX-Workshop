import { createReducer, on } from '@ngrx/store';
import { TaskInitialState } from './tasks.state';
import * as TaskActions from './tasks.actions';
import { Task } from '../task.model';

export const tasksReducer = createReducer(
  TaskInitialState,
  on(TaskActions.loadTasks, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    isLoading: false,
  })),

  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(TaskActions.toggleTask, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(TaskActions.toggleTasksSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    tasks: updateTaskList(state.tasks, task),
  })),
   on(TaskActions.createTask, (state) => ({
    ...state,
    isLoading: true,
  })),

 on(TaskActions.createTaskSuccess, (state, { task }) => ({
  ...state,
  tasks: [...state.tasks, task],
  isLoading: false,
})),
   on(TaskActions.deleteTask, (state) => ({
    ...state,
    isLoading: true,
  })),

 on(TaskActions.deleteTaskSuccess, (state, { _id }) => ({
  ...state,
  tasks: state.tasks.filter(task => task._id !== _id),
  isLoading: false,
})),

  on(TaskActions.setFilter, (state, { filter }) => ({
    ...state,
    filter,
  })),
);

function updateTaskList(tasks: Task[], updatedTask: Task): Task[] {
  return tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task));
}
