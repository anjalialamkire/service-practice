import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatButtonModule} from '@angular/material/button';
import { StudentFormComponent } from './component/student-form/student-form.component';
import { StudentTableComponent } from './component/student-table/student-table.component'
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    StudentFormComponent,
    StudentTableComponent
   
 
  ],
  imports: [
    BrowserModule,
     FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
