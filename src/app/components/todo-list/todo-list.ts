import { Component, Input } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoComponent } from './todo-item.component';
@Component({
  selector: 'todo-list',
  directives: [
    TodoComponent
  ],
  // templateUrl: './todo-list.html'
  template: `
	<div > List
  <ul>
  <li *ngFor="#item of list"> 
    <todo-component [todo]="item"></todo-component>
    </li>
    </ul>
	</div>
  `
})
export class TodoList {
  @Input()
  list: TodoItem[];

}