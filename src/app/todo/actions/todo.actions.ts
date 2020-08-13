import {Todo} from '../models/todo';
// @ts-ignore
import {createAction, props} from '@ngrx/store';


// export const GetTodoById = createAction(
//   '[Todos] Get Todo by ID',
//   props<{ id: number | string }>()
// );

export const ReorderTodo = createAction(
  '[Todos] Reorder Todo',
  props<{prevIndex: number, currIndex: number }>()
);

export const EditTodo = createAction(
  '[Todos] Edit Todo',
  props<{ id: number | string, changes: any }>()
);

export const AddTodo = createAction(
  '[Todos] Add Todo',
  props<{ todo: Todo }>()
);

export const CancelTodo = createAction(
  '[Todos] Cancel Todo',
  props<{ todo: Todo, completed: boolean }>()
);

export const CompleteTodo = createAction(
  '[Todos] Complete Todo',
  props<{ todo: Todo, completed: boolean }>()
);

export const FillInTodos = createAction(
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

