import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { Observable, of, Subject } from "rxjs";


@Injectable({
    providedIn :'root'
}) 


export class TodoService{
  
    todosArr : Itodo[]=[
        {
            todoItem:"learn Angular",
            todoId:"123"
        },

         {
            todoItem:"Practice Typescript",
            todoId:"124"
         },
         {
            todoItem:"Revise-Sass",
            todoId:"125"
         },
    ]
    
 editTodo$ : Subject<Itodo> = new Subject()
 
    CreateTodo(todo:Itodo):Observable<Itodo>{
         this.todosArr.push(todo)
         return of(todo)
    }

    fetchAllTodos ():Observable<Itodo[]>{
        //observable<ITodo[]>
        return of(this.todosArr)
    }

    // update todo method
    updateTodo(updatedObj : Itodo): Observable<Itodo>{
        //position >> index
        let getIndex = this.todosArr.findIndex(t => t.todoId === updatedObj.todoId)
        this.todosArr[getIndex]= updatedObj
        return of(updatedObj)

    }
     //remove todo method
     RemoveTodo(id :string): Observable<string>{
        let getIndex  = this.todosArr.findIndex(t => t.todoId === id)
        this.todosArr.splice(getIndex,1)
        return of(id)
        
     }
}