// Select elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Add text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  // Toggle complete on click
  taskSpan.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(removeBtn);

  // Append to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Event listener for add button
addBtn.addEventListener("click", addTask);

// Allow "Enter" key to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
