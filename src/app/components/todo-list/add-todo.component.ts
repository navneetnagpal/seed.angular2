import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem} from './todo-item';
@Component({
    selector: 'add-todo',

    // templateUrl: './todo-list.html'
    template: `
	<div>
    <input [(ngModel)]="todo.name" />
    <button type="button" (click)="addClicked()" >Add </button>
	</div>
  `
})
export class AddTodoComponent {
    @Input()
    //    todo:TodoItem;

    todo: TodoItem = {
        id: 1,
        name: 'init'
    };

    @Output()
    add = new EventEmitter();
    addClicked() {
        this.add.emit({name:this.todo.name,id:1});
    } 
}
