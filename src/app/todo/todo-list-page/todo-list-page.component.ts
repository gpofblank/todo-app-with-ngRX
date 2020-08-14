import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {Store} from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(800 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
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
    // this.store.dispatch(TodoActions.FillInTodos({todos: this.todoTestData}));
  }

  ngOnInit() {

    this.store.select((state: any) => state)
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.todos = data.todoReducerState.todos;
        }
      });

    const btn = document.getElementById('addTodo');
    document.body.onkeydown = function(e) {
      if (e.key === 'Enter') btn.click();
    };

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

    this.store.dispatch(TodoActions.AddTodo({todo}));
  }

  drop(event: CdkDragDrop<Todo[]>) {
    console.log('event -> ', event);
    console.log('data -> ', event.item.data);

    const prevIndex = event.previousIndex;
    const currIndex = event.currentIndex;

    // moveItemInArray(this.todos, prevIndex, currIndex);
    this.store.dispatch(TodoActions.ReorderTodo({prevIndex, currIndex}))
  }

}
