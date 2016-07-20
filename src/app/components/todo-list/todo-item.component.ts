import { Component, Input } from '@angular/core';
import { TodoItem} from './todo-item';
@Component({
  selector: 'todo-component',
   
  // templateUrl: './todo-list.html'
  template: `
	<div >{{todo.id}}::{{todo.name}}
	</div>
  `
})
export class TodoComponent { 
   @Input()
   todo:TodoItem;

}
