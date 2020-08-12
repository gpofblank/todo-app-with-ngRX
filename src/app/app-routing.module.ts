import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListPageComponent} from './todo/todo-list-page/todo-list-page.component';
import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';


const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'todo', component: TodoListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
