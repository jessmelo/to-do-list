window.setTimeout(function(){
var list = [];

console.log("TO DO LIST APP");

function listItems(){
    console.log("YOUR TO DO LIST:");
    list.forEach(function(item, i){
        console.log(i+1 + " - " + item);
    });
}

function newItem(){
    var newTask = prompt("Enter your new task:");
    list.push(newTask);
    console.log("\""+ newTask + "\" added to the list." );
}

function deleteItem(){
    var index = prompt("What item do you want to delete?");
    console.log("\""+ list[index-1] + "\" deleted from the list." );
    list.splice(index-1, 1);  // deletes one item
}

var input = prompt("What would you like to do?");

while (input !== "quit"){
    if (input === "list"){
       listItems();
    } else if (input === "new"){
        newItem();
    } else if (input === "delete"){
        deleteItem();
    }

    var input = prompt("What would you like to do?");
}
 
console.log("You quit the app!");

}, 500);