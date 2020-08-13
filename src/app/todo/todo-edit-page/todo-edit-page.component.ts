import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Todo} from '../models/todo';
import * as TodoActions from '../actions/todo.actions';

@Component({
  selector: 'app-todo-edit-page',
  templateUrl: './todo-edit-page.component.html',
  styleUrls: ['./todo-edit-page.component.css']
})
export class TodoEditPageComponent implements OnInit {

  public todo: Todo =
    {
      id: 0,
      createdAt: new Date(),
      text: '',
      completed: false
    };

  public todoEditForm: FormGroup;
  public createdAt: FormControl;
  public text: FormControl;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private store: Store, private router: Router) {

    this.todoEditForm = this.fb.group({
      createdAt: this.todo.createdAt,
      text: this.todo.text,
    });
  }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id;

    this.store
      .select((state: any) => state.todoReducerState)
      .subscribe((t) => {
        console.log(t);
        this.todo = t.todos
          .find((todo) => id == todo.id);
      });
    this.todoEditForm.patchValue(this.todo);
  }

  submit() {
    if (this.todoEditForm.valid) {
      const id: string = this.route.snapshot.params.id;
      const changes: any = this.todoEditForm.value;

      this.store.dispatch(TodoActions.EditTodo({id, changes}));
      this.router.navigateByUrl('/todos');
    }
  }
}
