// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { AppRoutingModule } from './app-routing.module'; // For routing configuration
import { AppComponent } from './app.component'; // Root component
import { TodoListComponent } from './components/todo-list/todo-list.component'; // List component
import { TodoAddComponent } from './components/todo-add/todo-add.component'; // Add component
import { TodoEditComponent } from './components/todo-edit/todo-edit.component'; // Edit component
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component'; // Detail component

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoEditComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Import routing module here
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the root component
})
export class AppModule { }
