# FSWD 
# PROBLEM-1 TASK MANAGEMENT SYSTEM: 
 
# Explanation: 
1. Array of Task Objects: 
   - Each task object contains `title`, `status`, and `priority`. 
 
2. Add Task Function: 
   - Uses an arrow function to push a new task object into the `tasks` array. 
 
3. Filter by Status: 
   - Filters the tasks based on their `status` using the `filter()` method. 
 
4. Find High Priority Task: 
   - Uses the `find()` method to get the first task with a `priority` of 5. 
 
5. Map for Titles and Status: 
   - Uses `map()` to create a formatted list of task titles with their statuses. 
 
6. Log Task Details: 
   - Iterates through all tasks with `forEach()` and logs each task's details using template 
literals for readability. 
 
# PROBLEM-2 ONLINE SHOPPING CART: 
 
# Explanation: 
1. Array of Product Objects: 
   - Each product object has `productName`, `price`, and `quantity`. 
 
2. Add Product: 
   - Adds a new product object to the `cart` array using an arrow function. 
 
3. Calculate Total: 
   - Uses `reduce()` to calculate the total cost by summing up `price * quantity` for all 
products. 
 
4. Remove Product: 
   - Uses an arrow function and `filter()` to remove a product by its `productName`. 
 
5. Destructuring for Product Details: 
   - Destructures `productName`, `price`, and `quantity` while iterating over the `cart`. 
 
6. Cart Summary: 
   - Logs each product in the cart using template literals for a readable format. 
 
# PROBLEM-3 WEATHER FORECAST TRACKER: 

# Explanation: 
1. City Weather Objects: 
   - Each object contains `cityName`, `temperature`, and `condition`. 
 
2. Add City Weather: 
   - Adds a new city weather object to the `weatherData` array. 
 
3. Find Hottest City: 
   - Uses `reduce()` to find the city with the highest temperature. 
 
4. Filter by Condition: 
   - Filters the `weatherData` array for cities matching the specified condition using 
`filter()`. 
 
5. List City Temperatures: 
   - Uses `map()` to format city names and temperatures as strings. 
 
6. Log Weather Summary: 
   - Logs all city weather details using destructuring and template literals for readability. 
 
# HOW TO RUN CODE 
Step 1: 
1) Install Node.js 
2) Verify Installation: 
Open a terminal (or command prompt) and run: 
node -v 
3) check npm version 
npm -v 
 
# Step 2: Set Up VSCode 
Install VSCode: 
 
Download and install Visual Studio Code. 
Install the JavaScript Extension (Optional): 
 
Go to the Extensions view in VSCode (Ctrl+Shift+X or Cmd+Shift+X on Mac). 
Search for JavaScript and TypeScript Nightly or any relevant extension to enhance 
JavaScript support. 
Install it. 
 
# Step 3: Create a New JavaScript File 
Open VSCode. 
Create a new file by clicking File > New File. 
Save the file with a .js extension, e.g., movies.js, weather.js, etc. 

# Step 5: Run the Code 
node movies.js 
# Step 6: See the Output 
The results will be displayed in the terminal. 
node movies.js
