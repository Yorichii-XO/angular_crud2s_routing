import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService, Todo } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  newTodo: Todo = { id: 0, title: '', description: '' };

  constructor(private todoService: TodoService, private router: Router) {}

  addTodo() {
    this.newTodo.id = Date.now();
    this.todoService.addTodo(this.newTodo);
    this.router.navigate(['/todos']);
  }
}
