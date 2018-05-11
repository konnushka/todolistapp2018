import{Task} from '../ts/task';
export class TaskManager{
  tasks : Array<Task>
  constructor(array : Array<Task>){
    this.tasks = array;
  }
  add(task:Task){
      this.tasks.push(task);
      //console.log(this.tasks);
      this.sort(this.tasks);
    }
    changeStatus(id:string, callback): void{
      this.tasks.forEach((task:Task) => {
        if (task.id == id){
            if(task.id == false)
            {
              task.status = true;
            }
            else{
              task.status = false;
            }
        }
      });
      this.sort(this.tasks);
      callback();//render the list view
    }
    delete(id:string, callback):void{
      let index_to_remove:number = undefined;
      this.task.forEach((item:Task, index:number) =>{
        //check for id match
        if(item.id == id)
        {
          index_to_remove = index;
        }
      });
      //delete the item with specified index_to_remove
      if(index_to_remove !== undefined){
      this.tasks.splice(index_to_remove,1);

      }
      this.sort(this.tasks);
      callback();

    }
    sort(tasks:Array<Task>){
      tasks.sort((task1,task2)=>{
        if(task1.status == true && task2.status == false){
          return 1;
        }
        if (task1.status == false && task2.status == true){
          return -1;
        }
        if (task1.status == task2.status){
          return 0;
        }
      });

    }

}
