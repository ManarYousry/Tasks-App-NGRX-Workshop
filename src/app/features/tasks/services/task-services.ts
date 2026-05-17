import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Task } from '../task.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  //
  private baseUrl = 'https://gsvfks-3000.csb.app/tasks';  //'https://lf7z92-3000.csb.app/tasks';
  //
  private _httpClient = inject(HttpClient);
  //
  getTasks(): Observable<Task[]> {
    return this._httpClient.get<Task[]>(this.baseUrl);
  }

  createTask(task: any): Observable<Task> {
    return this._httpClient.post<Task>(this.baseUrl, task);
  }

  // take updated completed
  toggleTaskCompletion(id: string, completed: boolean): Observable<Task> {
    return this._httpClient.patch<Task>(`${this.baseUrl}/${id}`, { completed });
  }

  deleteTask(id: string): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
