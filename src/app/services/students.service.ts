import { Injectable } from '@angular/core';
import { Istd, IstdAddSucRes } from '../models/student';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  stdArr: Array <Istd>= [
  {
    fname: "may",
    lname: "doe",
    email: "may@gmail.com",
    contact: "9876543210",
    stdId : '123'
  },
  {
    fname: "john",
    lname: "Doe",
    email: "john@gmail.com",
    contact: "9876501234",
    stdId:'124'
  }
]

   editStd$ : Subject <Istd> = new Subject()
  constructor() { }

  fetchStudentsData(): Observable<Istd[]>{
    return of(this.stdArr)
  }

  createStd(std : Istd){
      this.stdArr.push(std)
      return of({
        status:'success',
        message : `New Student  with id ${std.stdId} Added sucesfully`,
        date:std
      })
  }

    removeStd(id:string){
      let getIndex=this.stdArr.findIndex(s => s.stdId === id)
      this.stdArr.splice(getIndex,1)
      return of ({
        status:'success',
        message:`The Student with id ${id} Remove successfully !!!!`,
        data : id
      })
    }
    
    updateStd(stdObj:Istd): Observable<Istd>{
    let getIndex = this.stdArr.findIndex(s => s.stdId === stdObj.stdId)
     this.stdArr[getIndex]= stdObj

     return of(stdObj)
    }

}
