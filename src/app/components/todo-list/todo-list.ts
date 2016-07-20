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
	<div >Hello  {{todo.name}}
    <input [(ngModel)]="todo.name" placeholder="name">
    <todo-component></todo-component>
	</div>
  `
})
export class TodoList {
  @Input()
  todo: TodoItem;

}