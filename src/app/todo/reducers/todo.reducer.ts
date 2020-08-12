import {Action, createReducer, on, props} from '@ngrx/store';
import {Todo} from '../models/todo';

import * as TodoActions from '../actions/todo.actions';

export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: [] // I fill the initial state in through dispatching to an action but it could be hardcoded here too.
};

const todoReducer = createReducer(
  initialState,
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
      // todos: state.todos = this.testData
    };
  }),

  // on(TodoActions.DeleteTodo, (state, {todoId}) => {
  //   return {
  //     ...state,
  //     todos: state.todos.filter(e => e.id != todoId)
  //   };
  // })
);

export function todoReducerState(state: TodosState | undefined, action: Action) {
  return todoReducer(state, action);
}
