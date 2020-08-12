import {Todo} from '../models/todo';
// @ts-ignore
import {createAction, props} from '@ngrx/store';

export let FillInTodos = createAction(
  '[Todos] FillInTodos Todos',
  props<{ todos: Todo[] }>()
);

export const GetTodos = createAction(
  '[Todos] Get Todos'
);

export const CreateTodo = createAction(
  '[Todos] Create Todo',
  props<{ todo: Todo }>()
);

/* export const DeleteTodo = createAction(
   '[Todos] Delete Todo',
   props<{ todoId: number | string }>()
 );
 */
// @ts-ignore

