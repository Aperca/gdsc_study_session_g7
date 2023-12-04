var list=document.getElementsByTagName('li');
function createCloseButton() {
    var span = document.createElement("span");
    var symbol = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(symbol);
    span.onclick = function () {
        var par = this.parentElement;
        par.style.display = "none";
    };
    return span;
}

// Add close buttons to existing tasks
for (let i = 0; i < list.length; ++i) {
    list[i].appendChild(createCloseButton());
}


function newTask(){
    var taskLi=document.createElement("li");
    var value= document.getElementById("input").value;
    var txt = document.createTextNode(value);
    taskLi.appendChild(txt);

    if (value === '') {
        alert("You must write something!");
      } else {
        var tasksContainer = document.getElementById("tasks");
        tasksContainer.appendChild(taskLi);
        taskLi.appendChild(createCloseButton());   
       }
        
  document.getElementById("input").value = "";
}
document.getElementById("btnid").addEventListener("click", newTask);
