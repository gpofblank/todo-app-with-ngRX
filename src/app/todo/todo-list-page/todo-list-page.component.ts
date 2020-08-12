import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/todo';
import {Store} from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import {GetTodos} from '../actions/todo.actions';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {

  public todoText = '';

  todos: Todo[] = [];

  todoTestData: Todo[] = [
    {
      id: 1,
      text: 'da otida za hlqb',
      createdAt: new Date(),
      completed: false
    },
    {
      id: 2,
      text: 'da otida za voda',
      createdAt: new Date(),
      completed: false
    },
    {
      id: 3,
      text: 'da otida do Varna',
      createdAt: new Date(),
      completed: false
    }];

  constructor(private store: Store) {
    this.store.dispatch(TodoActions.FillInTodos({todos: this.todoTestData}));

  }
  ngOnInit() {


    this.store.select((state: any) => state)
      .subscribe((data) => {
        console.log(data)
        if (data) {
          this.todos = data.todoReducerState.todos;
        }
      });


  }

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
