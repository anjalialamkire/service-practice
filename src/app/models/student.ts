

export interface Istd{
     fname: string;
    lname: string;
    email: string;
    contact: string;
    stdId: string;
}

export interface IstdAddSucRes<T>{
    status :string;
    message:string;
    data:T
}

export  type TeditMode = "EDIT" | "ADD"
