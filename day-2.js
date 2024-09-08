let tasks = ["Buy milk", "Clean the room", "Go to the gym"];

function displayTasks() {
    console.log("Tasks on your to do list are:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    })
    console.log("\n");
}

function addTask(task) {
    tasks[tasks.length] = task;
    console.log(`successfully added "${task}" to the list \n`);
    // displayTasks();
}

function addTaskAtStart(task) {
    for (let i = tasks.length; i > 0; i--){
        tasks[i] = tasks[i - 1];
    }
    tasks[0] = task;
    console.log(`Successfully added "${task}" on the beggining of the list \n`)
}

function removeTask(index){
    if (index >= 0 && index < tasks.length) {
        let removeTask = tasks[index];
        for (let i = index; i < tasks.length; i++){
            tasks[i] = tasks[i + 1];
        }
        // tasks.length = tasks.length -1;
        tasks.length--;
        console.log(`Successfully remove "${removeTask} from the list \n`)
    } 
    else {
        console.log(`Task with index ${index} does not exist \n`)
    }
}

displayTasks();

addTask("Buy eggs");
displayTasks();

addTaskAtStart("Buy bread");
displayTasks();

removeTask(2);
displayTasks();