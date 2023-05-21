"use strict";
const ps=require("prompt-sync");
const  prompt=ps();
var ID=1;
class Task {
    id;
    isCompleted;
  constructor(id,isCompleted) {
    this.id= id;
    this.isCompleted=isCompleted;
  }
}
Task.prototype.description ="" ;
Task.prototype.dueDate="" ;
Task.prototype.priorityLevel="" ;

let myArray = [];
console.log(`***************************
Welcome to JS TODO-APP
***************************
You May enter the number of the task you want to do !         
Please select an action:
1) Add a new task
2) List all tasks
3) List completed tasks
4) Mark the task as done
5) Delete a task
6) Sort tasks by the due date
7) Sort tasks by priority
8) Clear all tasks
9) exit
***************************
What's your choice?  `);
while(1)
{
var option =prompt(`:`);
if(option == "9"){
    break;
}
//console.log(`YOUR` +option);
switch(option){
    case "1":
    addTask();
    console.log(`Task added` );
    break;
    case "2":
   console.log(myArray);
    break;
    case "3":
    const done = myArray.filter(function(item) {
    return item.isCompleted == "true";
    });
    console.log(done);
    break;
    case "4":
    mark();
    console.log(`Task is Completed` );
    break;
    case "5":
    remove();
    console.log(`Task is Removed` );
    break;
    case "6":
    sorting2();
    console.log(myArray);
    break;
    case "7":
    sorting();
    console.log(myArray);
    break;
    case "8":
    myArray.splice(0,myArray.length);
    console.log(`All Tasks Removed!` );
    break;
    default:
     


}
function addTask(){
    let isCompleted =prompt(`isCompleted:  `);
    let priorityLevel=prompt(`priorityLevel:  `);
    const dueDate =(prompt(`dueDate:  `));
    let description =prompt(`description:  `);
    const task=new Task(ID,isCompleted);
    task.description =description ;
    task.dueDate=dueDate;
    task.priorityLevel=priorityLevel;
    ID++;
  myArray.push(task);
   }

    function mark(){
        let id =prompt(`ID of task to be marked as done:  `);
        myArray.forEach(function(item){
            if(item.id == id)
            item.isCompleted ="true";
    });
    }
   
    function remove(){
        let id =prompt(`ID of task to be removed:  `);
        const index = myArray.findIndex(x => x.id ==id);
        if (index > -1) { // only splice array when item is found
            myArray.splice(index, 1); // 2nd parameter means remove one item only
          }
          
    }
    function compareByDate(a, b) {
        const date1=new Date(a.dueDate);
        const date2 =new Date(b.dueDate);
        if (date1 <date2) {
          return -1;
        }
        if (date1 >date2) {
          return 1;
        }
        return 0;
      }
      function sorting2()
      {myArray.sort(compareByDate);}
      function compareByPriority(a, b) {
        if ((a.priorityLevel) < (b.priorityLevel)) {
          return -1;
        }
        if ((a.priorityLevel) > (b.priorityLevel)) {
          return 1;
        }
        return 0;
      }
      function sorting()
      {myArray.sort(compareByPriority);}
      
}
