import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService, Todo } from '../../services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo: Todo = { id: 0, title: '', description: '' };

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const foundTodo = this.todoService.getTodoById(id);
    if (foundTodo) {
      this.todo = { ...foundTodo };
    }
  }

  updateTodo() {
    this.todoService.updateTodo(this.todo);
    this.router.navigate(['/todos']);
  }
}
