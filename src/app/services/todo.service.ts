import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Learn Angular', description: 'Understand the basics of Angular' },
    { id: 2, title: 'Build a CRUD App', description: 'Create a simple CRUD application with Angular' }
  ];

  private todos$ = new BehaviorSubject<Todo[]>(this.todos);

  getTodos() {
    return this.todos$.asObservable();
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todos$.next(this.todos);
  }

  updateTodo(updatedTodo: Todo) {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
      this.todos$.next(this.todos);
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todos$.next(this.todos);
  }
}
