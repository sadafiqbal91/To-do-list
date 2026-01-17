// Initial Task Array
let tasks = [];

// DOM Elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const statusMessage = document.getElementById('statusMessage');

// --- Array Methods Implementation ---

// 1. push() - Adds to the end
function addToBottom() {
    const value = taskInput.value.trim();
    if (!value) return;
    
    tasks.push(value); // METHOD: push
    updateUI(`Added "${value}" to the end.`);
    taskInput.value = '';
}

// 2. unshift() - Adds to the beginning
function addToTop() {
    const value = taskInput.value.trim();
    if (!value) return;
    
    tasks.unshift(value); // METHOD: unshift
    updateUI(`Priority task "${value}" added to top.`);
    taskInput.value = '';
}

// 3. shift() - Removes the first element
function removeFirst() {
    if (tasks.length === 0) return showStatus("List is empty!");
    
    const removedValue = tasks.shift(); // METHOD: shift
    updateUI(`Removed first task: "${removedValue}"`);
}

// 4. pop() - Removes the last element
function removeLast() {
    if (tasks.length === 0) return showStatus("List is empty!");
    
    const removedValue = tasks.pop(); // METHOD: pop
    updateUI(`Removed last task: "${removedValue}"`);
}

// 5. slice() - Returns a shallow copy of a portion of an array
function getPreview() {
    if (tasks.length === 0) return showStatus("Nothing to preview.");
    
    // We use slice to show the first 3 items without modifying the original array
    const preview = tasks.slice(0, 3); // METHOD: slice
    
    alert(`Top 3 Preview:\n${preview.join('\n') || 'None'}`);
    showStatus(`Showing preview of ${preview.length} items.`);
}

// --- UI Logic ---

function updateUI(msg) {
    // Clear the list
    taskList.innerHTML = '';
    
    // Render each task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><span class="task-id">#${index + 1}</span> ${task}</span>
        `;
        taskList.appendChild(li);
    });

    showStatus(msg);
}

function showStatus(msg) {
    statusMessage.innerText = msg;
    setTimeout(() => {
        if (statusMessage.innerText === msg) statusMessage.innerText = '';
    }, 3000);
}

// Event Listeners
document.getElementById('addBottomBtn').addEventListener('click', addToBottom);
document.getElementById('addTopBtn').addEventListener('click', addToTop);
document.getElementById('removeFirstBtn').addEventListener('click', removeFirst);
document.getElementById('removeLastBtn').addEventListener('click', removeLast);
document.getElementById('previewBtn').addEventListener('click', getPreview);

// Handle "Enter" key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addToBottom();
});
