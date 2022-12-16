// javascript code goes here
const tasks=[];


//For Each Todo I need to maintain
//1. The Title of todo
//2. The status of Todo

function showAllTasks(){
    console.log("Tasks Array",tasks);
    const unorderedList=document.getElementById("todo-list");
    unorderedList.innerHTML="";


    for(let i=0;i<tasks.length;i++){
        const task=tasks[i];
        const listElement=document.createElement("li");
        listElement.innerText=task.title;
        listElement.className="todo-item"
        if(task.completed){
            listElement.style.textDecoration="line-through";
        }
        else{
            listElement.style.textDecoration="none";
        }
        const completeButton=document.createElement("button");
        completeButton.className="complete-btn";
        completeButton.innerHTML='Done';

        completeButton.addEventListener("click",function(){
            task.completed=!task.completed
           // console.log("Tasks is",task);
            showAllTasks();
        })

        const deleteButton=document.createElement("button");
        deleteButton.className="delete-btn";
        deleteButton.innerText="X";
        deleteButton.setAttribute("id","dbtn")
        deleteButton.addEventListener("click",()=>{
            tasks.splice(i,1);
            showAllTasks();
        })
        listElement.appendChild(completeButton);
        listElement.appendChild(deleteButton);
        unorderedList.appendChild(listElement);
    }
}

function addTask(event){
    event.preventDefault();
    const enteredTask=document.getElementById("todo-input").value;
    if(enteredTask===""){
alert("Add something u want to do !!")
    }else{
    //Object Should be used when you want to contain information abouth something
   
    const newTodo={
        title:enteredTask,
        completed:false
    }
    //Will push Todo Object in tasks array
    tasks.push(newTodo);
    showAllTasks();
    document.getElementById("todo-input").value=""
}}