window.setTimeout(function(){
    console.log("TO DO LIST APP");

    var todolist = [];

    var list =  document.getElementById("list");

    list.item = document.getElementsByClassName("task");

   function loopList() {
       list.textContent = " ";
       for(var i = 0; i<todolist.length; i++){
            list.insertAdjacentHTML('beforeend', '<li class="task"></li>')
            list.item[i].textContent = todolist[i];
       }
    }

    var newButton = document.getElementById("new");

    newButton.addEventListener("click", newTask);

    function newTask(){
        var newItem = prompt("What do you want to do?");
        if(newItem != null){
            todolist.push(newItem);
            list.insertAdjacentHTML('beforeend', '<li class="task"></li>')
            list.item[list.item.length-1].textContent = todolist[todolist.length-1];
        }
    }

    var deleteButton = document.getElementById("delete");

    deleteButton.addEventListener("click", deleteTask);

    function deleteTask(){
        var itemIndex = prompt("What task do you want to delete?");
        if(itemIndex != null){
            todolist.splice(itemIndex-1, 1);
            loopList();
        }
    }

    var clearList = document.getElementById("clear");

    clearList.addEventListener("click", function(){
        todolist.splice(0, todolist.length);
        loopList();
    });

}, 500);
