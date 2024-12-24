


let tasks = [];

constaddTask = (title, status, priority) => {
    tasks.push({ title, status, priority });
};

constfilterByStatus = (status) =>tasks.filter(task =>task.status === status);

constfindHighPriorityTask = () =>tasks.find(task =>task.priority === 5);

constlistTaskTitlesWithStatus = () =>
    tasks.map(task => `Task: ${task.title}, Status: ${task.status}`);

constlogTaskDetails = () => {
    console.log("Task Details:");
    tasks.forEach(task => {
        console.log(`Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`);
    });
};
addTask("Finish project report", "Pending", 4);
addTask("Clean the house", "Completed", 3);
addTask("Prepare presentation", "Pending", 5);
addTask("Pay bills", "Pending", 2);

console.log("Tasks with 'Pending' status:");
console.log(filterByStatus("Pending"));

console.log("\nFirst High Priority Task (priority 5):");
console.log(findHighPriorityTask());

console.log("\nList of Task Titles with Status:");
console.log(listTaskTitlesWithStatus());

console.log("\nDetails of All Tasks:");
logTaskDetails();
