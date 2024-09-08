let tasks = ["Buy Milk", "Clean the Room", "Go to the Gym"];

console.log("Tasks on My To-Do List");
console.log("1. " + tasks[0]);
console.log(`2. ${tasks[1]}`);
console.log(`3. ${tasks[2]}`);

tasks.push("Do the Laundry");
console.log(`4. ${tasks[3]}`);

console.log(tasks);

tasks.pop();
console.log(tasks);

tasks.shift();
console.log(tasks);

tasks.unshift("Cook Dinner");
console.log(tasks);

tasks.splice(1, 1);
console.log(tasks);

tasks.splice(1, 0, "Wash the Dishes");
console.log(tasks);