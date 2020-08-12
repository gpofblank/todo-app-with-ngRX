import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/todo';

import { Store } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private store: Store) {}

  public onComplete() {
    this.store.dispatch(TodoActions.CompleteTodo({todo: this.todo, completed: true}));
  }

  public cancel() {
    this.store.dispatch(TodoActions.CancelTodo({todo: this.todo, completed: false}));
  }

  ngOnInit(): void {}
}

