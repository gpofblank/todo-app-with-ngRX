import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {

  public todoText = '';

  todos: Todo[] = [];

  ngOnInit() {}

  public addTodo() {
    if (this.todoText.length == 0) {
      return;
    }

    const id = Math.random();

    const todo: Todo = {
      id,
      text: this.todoText,
      completed: false,
      createdAt: new Date(),
    };

    this.todoText = '';
    this.todos.push(todo);
  }

}
