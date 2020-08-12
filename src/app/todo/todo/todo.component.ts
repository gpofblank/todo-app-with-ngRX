import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  public onComplete() {
    this.todo.completed = true;
  }

  public cancel() {
    this.todo.completed = false;
  }

  ngOnInit(): void {}
}

