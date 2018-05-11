export class Task{//export is to make public

    id:string;
    name:string;
    status:boolean;
constructor(taskname:string){
    this.id = new Date().getTime().toString();
    this.name = taskname;
    this.status = false;
    }
}
