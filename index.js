let tasks = [
    ["Work", ["Complete the report", "Email the team", "Call the client"]],
    ["Personal", ["Buy groceries", "Pick up the kids", "Do the laundry"]]
]

// Function to display tasks and their category
function displayCategorizedTasks(){
    tasks.forEach((category) =>{
        console.log(`\t ${category[0]} Tasks:`);
        category[1].forEach((task, index) => {
            console.log(`\t\t ${index + 1}. ${task}`);
        })
    })
}

// Function to Add a New Task to a Category
function addCategorizedTask(category, task){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            tasks[i][1].push(task);
            console.log(`\n\n Task "${task}" added to "${category}" tasks`);
            console.log("To DO List after adding a new task");
            return;
        }   
    }
    console.log(`Category "${category}" not found \n`);
}

//Function to Remove a Task from a Category
function removeCategorizedTask(category, index){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            if (index >= 0 && index < tasks[i][1].length) {
                let removedTask = tasks[i][1][index];
                for (let j = index; j < tasks[i][1].length; j++){
                    tasks[i][1][j] = tasks[i][1][j+1];
                }
                tasks[i][1].length--;
                console.log(`\n\n Task "${removedTask}" was removed from "${category}" tasks`);
                console.log("To Do List after removing a Task");
                return;
            } 
        }
    }
    console.log(`Category ${category} not found \n`);
}

//Function to sort tasks in a category alphabetically
function sortTasks(category){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            tasks[i][1].sort();
            console.log(`\n\n "${category}" tasks have been sorted`)
            console.log("To Do List after Sorting tasks")
            return;
        }
    }
    console.log(`Category "${category}" not found`)
}

//Function to Search through a category for a task
function searchTasks(category, task){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            let index = tasks[i][1].indexOf(task);
            if (index != -1){
                console.log(`Task "${task}" found at index "${index + 1}" in "${category}" tasks \n`);
                return;
            }
        }
    }
    console.log(`Task ${task} not found in "${category}" tasks`);
}

// Calling the Functions
console.log("\n\n To Do List before adding a new task");
displayCategorizedTasks();

addCategorizedTask("Work", "Complete the presentation");
displayCategorizedTasks();

removeCategorizedTask("Personal", 1);
displayCategorizedTasks();

sortTasks("Work");
displayCategorizedTasks();

console.log("\n\n Searched To Do List Result:")
searchTasks("Work", "Email the team");
// displayCategorizedTasks();


