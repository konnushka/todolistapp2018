class Task{

    id:number;
    name:string;
    status:boolean;
constructor(taskname:string){
    this.id = new Date().getTime();
    this.name = taskname;
    this.status = false;    
    }
}
//reference to form
const taskform = document.getElementByID('task-form');
    taskform.addEventListener('submit',(event: Event)=>{
        event.preventDefault();
        const input = document.getElementById('task-input');
        let tasname=input.Value;
        console.log(taskname);
    });
    
    