import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn :'root'
})


export class TodoService{
  
    todosArr : Itodo[]=[
        {
            todoItem:"angular",
            todoId:"123"
        },

         {
            todoItem:"Js",
            todoId:"124"
         },

           {
            todoItem:"Sass",
            todoId:"125"
         },

    ]

    fetchAllTodos ():Observable<Itodo[]>{
        //observable<ITodo[]>
        return of(this.todosArr)
    }
}