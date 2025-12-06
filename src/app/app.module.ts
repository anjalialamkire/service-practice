import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PostTwoComponent } from './component/post-two/post-two.component';
import { PostThreeComponent } from './component/post-three/post-three.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
   
    PostTwoComponent,
    PostThreeComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
