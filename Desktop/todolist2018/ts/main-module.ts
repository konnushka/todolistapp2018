//import the javascript file

import{Task} from '../ts/task';
import{TaskManager} from '../ts/TaskManager';
import {ListView} from '../ts/ListView'
import {DataStorage} from '../ts/DataStorage'

//initialize
var taskarray = [];
var taskstorage = new DataStorage();
var taskmanager = new TaskManager(taskarray);
var listview = new ListView('task-list');

window.addEventListener('load',()=>{
  let taskdata = taskstorage.read((data)=>{
    //check for Data
    if(data.length > 0){
      data.forEach ((item) => {
        taskarray.push(item);
      });
      listview.clear();
      listview.render(taskarray);
    }
    });
  //taskdata.forEach((item)=>{taskarray.push(item);});
  //listview.render(taskarray);
});
//reference to form
const taskform = (<HTMLFormElement> document.getElementById('task-form'));//cast it as an html form
    taskform.addEventListener('submit',(event: Event)=>{
        event.preventDefault();
        let input = document.getElementById('task-input');
        let taskname=(<HTMLInputElement>input).value;
        taskform.reset();
        //console.log(taskname);
        if (taskname.length > 0){

        let task = new Task (taskname);
        //TaskManager.add(task);
        taskmanager.add(task);
        listview.clear();
        taskstorage.store( taskarray ,(result) => {
            if(result){
              taskform.reset();
              listview.clear();
              listview.render(taskarray);
            }
            else{
              //error handler
            }


        });//store the data
      //  listview.render( taskarray );
      }
      else{

          //does nothing blank tasks are  not added

      }
    });






//get the id of the getElementById
function getParentID(elm:Node){

  while (elm.parentNode){
    elm.elm.parentNode;
    let id:string = (<HTMLElement> elm).getAttribute('id');
    //if id found
          if(id){
          return id;
        }
  }
  return null;//if id is not found
}
    //add new listener for list
    const listelement:HTMLElement = document.getElementById('task-list');
    listelement.addEventListener('click',(event:Event)=> {
      let target:HTMLElement = <HTMLElement> event.target;
      let id = getParentID(<Node> event.target); //node means html in the conttent of the document
        //check which button was click
    if(target.getAttribute('data-function')=='status'){
          //check if id exist
          if(id){
          taskmanager.changeStatus(id, () => {
            taskstorage.store(taskarray,()=>{
              listview.clear();
              listview.render(taskarray);

            });
            //listview.clear();
            //listview.render(taskarray);
            } );
          }
      }
    //try to delete the tasks
      if(target.getAttribute('data-function')=='delete'){
        if( id ){
          taskmanager.delete(id,() => {

            taskstorage.store(taskarray,()=>{
              listview.clear();
              listview.render(taskarray);

            });
          });

        }
      }
    });
