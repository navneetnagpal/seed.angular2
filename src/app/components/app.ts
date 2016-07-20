import { Component, Input } from '@angular/core';
import { TodoList } from './todo-list/todo-list';
import { AddTodoComponent } from './todo-list/add-todo.component';
import { TodoItem } from './todo-list/todo-item';
@Component({
  selector: 'app',

  directives: [AddTodoComponent,TodoList],
  template: `
   <div class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-right">
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">About</a></li>
            <li role="presentation"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <h3 class="text-muted">Angular 2 Start</h3>
      </div>

      <div class="jumbotron">
        <h1>Jumbotron heading</h1>
        <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
      </div>

      <div class="row marketing">
        <div class="col-lg-6">
            <add-todo (add)="addClicked($event)"> </add-todo>
        </div>

        <div class="col-lg-6">
            <todo-list [list]="todos" ></todo-list>
        </div>
      </div>

      <footer class="footer">
        <p>&copy; 2015 Company, Inc.</p>
      </footer>

    </div> <!-- /container -->

  
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  todos: TodoItem[] = new Array();

  setHero(items: TodoItem[]) {
    this.todos = items;
    return this;
  }

  addClicked(item:TodoItem){
    console.log(item);
    this.todos.push(item);
  }
}
