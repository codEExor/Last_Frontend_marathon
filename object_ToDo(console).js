const list = {
    "create a new practice task": "In Progress",
     "make a bed": "To Do",
     "write a post": "To Do",
    }
    function changeStatus(task,status){
      list[task] = status ;
    }
    
    function addTask(task){
      list[task] = "To Do";
    }
    
    function deleteTask(task){
      delete list[task];
    } 
    
        function showList(){
    
            let ToDo='';
            console.log("ToDo");
            let countToDo
            for ( countToDo in list) {
                if(list[countToDo] == "To Do"){ 
                ToDo = ToDo + "\n" + countToDo;}
            }
            if( ToDo == false) console.log('-')
            else console.log(ToDo);

            
            let InProgress='';
            console.log("In Progress:") 
            let countInProgress
            for ( countInProgress in list) {
                if(list[countInProgress] == "In Progress"){ 
                InProgress = InProgress + "\n"  + countInProgress;}
            }
            if( InProgress == false) console.log('-')
            else console.log(InProgress);
            

            let Done='';
            console.log("Done");
            let countDone
            for ( countDone in list) {
                if(list[countDone] == "Done"){ 
                Done = Done + "\n" + countDone;}
            }
            if( Done == false) console.log("-")
            else console.log(Done); 
        }

     addTask("play of hockey");
     changeStatus("play of hockey","In Progress");
     deleteTask("write a post"); 
     showList(); 
