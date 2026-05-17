import { Component, input, output } from '@angular/core';
import { Task } from '../../task.model';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-card',
  imports: [ToggleSwitchModule, FormsModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  task = input<Task>({} as Task);
  onToggle = output<{ _id: string; completed: boolean }>();
  onDelete = output<{ _id: string}>();
  toggle() {
    // send as it is ( send current object)
    this.onToggle.emit({ _id: this.task()._id!, completed: this.task().completed! });
  }
  
  deleteTask() {
    this.onDelete.emit({ _id: this.task()._id!});
  }
}