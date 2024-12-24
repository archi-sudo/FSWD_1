
let tasks = [];

const addTask = (title, status, priority) => {
  tasks.push({ title: title, status: status, priority: priority });
};


const filterByStatus = (status) => {
  return tasks.filter((task) => task.status === status);
};


const findHighPriorityTask = () => {
  return tasks.find((task) => task.priority === 5);
};

const getTaskTitlesWithStatus = () => {
  return tasks.map((task) => `Task: ${task.title}, Status: ${task.status}`);
};


const logAllTasks = () => {
  tasks.forEach((task) => {
    console.log(`Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`);
  });
};

addTask("Do laundry", "Pending", 3);
addTask("Submit assignment", "Completed", 5);
addTask("Grocery shopping", "Pending", 2);

console.log("Filtered Tasks:", filterByStatus("Pending"));
console.log("High Priority Task:", findHighPriorityTask());
console.log("Task Titles with Status:", getTaskTitlesWithStatus());

logAllTasks();
