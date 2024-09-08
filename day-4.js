let tasks = ["Buy milk", "Go to the gym", "Clean the room"];

function displayTasks() {
    console.log("Tasks on your to do list are:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    })
    console.log("\n");
}

function sortTasks(){
    tasks.sort();
    console.log("Tasks sorted in alphabetical order");
    displayTasks();
}

function searchTasks(task){
    let index = tasks.indexOf(task);
    if(index != -1){
        console.log(`Task ${task} found at index ${index + 1}`);
    } 
    else {
        console.log(`Task ${task} not found`);
    }
}

displayTasks();
sortTasks();

searchTasks("Buy milk");