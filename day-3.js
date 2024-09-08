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
function addCategorizedTask(category, task){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            tasks[i][1].push(task);
            console.log(`\nTask "${task}" added to "${category}" tasks\n`);
            console.log("To DO List after adding a new task\n");            return;
        }
    
    }
    console.log(`Category "${category}" not found \n`);

}

console.log("To Do List before adding a new task\n");
displayCategorizedTasks();

addCategorizedTask("Work", "Complete the presentation");
displayCategorizedTasks();