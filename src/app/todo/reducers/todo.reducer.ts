import {Action, createReducer, on} from '@ngrx/store';
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

  // on(TodoActions.GetTodoById, (state, {id}) => {
  //   console.log('get todo by id action');
  //
  //   return {
  //     ...state,
  //   };
  // }),

  on(TodoActions.ReorderTodo, (state, {prevIndex, currIndex}) => {
    console.log('reorder todo action');

    return {
      ...state,
      todos: reorder(state.todos, prevIndex, currIndex)
    };
  }),

  on(TodoActions.EditTodo, (state, {id, changes}) => {
    console.log('edit todo action');
    console.log(changes);
    return {
      ...state,
      todos: state.todos.map((t) => {
        if (t.id == id) {
          t = {...t, ...changes};
        }
        return t;
      })
    };
  }),

  on(TodoActions.AddTodo, (state, {todo}) => {
    console.log('add todo action');

    return {
      ...state,
      todos: [todo, ...state.todos]
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
  )
;

export function todoReducerState(state: TodosState | undefined, action: Action) {
  return todoReducer(state, action);
}

const reorder = (arr, from, to) => {
  const clone = [...arr];
  Array.prototype.splice.call(clone, to, 0,
    Array.prototype.splice.call(clone, from, 1)[0]
  );
  return clone;
};
