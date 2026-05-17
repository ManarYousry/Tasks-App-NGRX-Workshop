import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskFilter } from '../../task.model';
import * as TaskActions from '../../store/tasks.actions';
@Component({
  selector: 'app-filter-buttons-group',
  imports: [],
  templateUrl: './filter-buttons-group.html',
  styleUrl: './filter-buttons-group.scss',
})
export class FilterButtonsGroup {
  private _store = inject(Store);

  filters :{ label: string; value: TaskFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed' }
];

selectedFilter = 'all';

  setFilter(filter: TaskFilter) {
    debugger
    this._store.dispatch(TaskActions.setFilter({ filter }));
  }
}
