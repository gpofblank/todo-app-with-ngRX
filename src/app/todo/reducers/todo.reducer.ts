import {Action, createReducer, on} from '@ngrx/store';
import {Todo} from '../models/todo';

import * as TodoActions from '../actions/todo.actions';
import {map} from 'rxjs/operators';

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: [] // I fill the initial state in through dispatching to an action but it could be hardcoded here too.
};

const todoReducer = createReducer(
  initialState,
  on(TodoActions.AddTodo, (state, {todo}) => {
    console.log('add todo action');

    return {
      ...state,
      todos: state.todos.concat(todo)
    };
  }),
  on(TodoActions.CancelTodo, (state, {todo, completed}) => {
    console.log('cancel todo action');

    return {
      ...state,
      todos: state.todos.map((t) => {
        if (t.id == todo.id) {
          t = {...t, completed};
        }
        return t;
      })
    };
  }),
  on(TodoActions.CompleteTodo, (state, {todo, completed}) => {
    console.log('complete todo action');

    return {
      ...state,
      todos: state.todos.map((t) => {
          if (t.id == todo.id) {
            t = {...t, completed};
          }
          return t;
        })
    };
  }),
  on(TodoActions.FillInTodos, (state, {todos}) => {
    console.log('fill in todos action');

    return {
      ...state,
      todos
    };
  }),
  on(TodoActions.GetTodos, (state) => {
    console.log('get todos action');

    return {
      ...state,
    };
  }),

  // on(TodoActions.DeleteTodo, (state, {todoId}) => {
  //   return {
  //     ...state,
  //     todos: state.todos.filter(t => t.id != todoId)
  //   };
  // })
);

export function todoReducerState(state: TodosState | undefined, action: Action) {
  return todoReducer(state, action);
}
