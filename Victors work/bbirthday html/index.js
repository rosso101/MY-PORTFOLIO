// Initialize an array to store messages
const messages = [];

// Function to add a message to the board
function addMessage(sender, message) {
    messages.push({ sender, message });

    // Create a new message element
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;

    // Append the message to the message board
    document.getElementById("message-board").appendChild(messageElement);
}

// Function to update the list of messages on the web page
function updateMessageList() {
    const messageBoard = document.getElementById("message-board");
    messageBoard.innerHTML = ''; // Clear the message board

    // Iterate through the messages array and add each message to the board
    for (const { sender, message } of messages) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        messageBoard.appendChild(messageElement);
    }
}

// Event listener for the message form submission
document.getElementById("message-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const sender = document.getElementById("sender").value;
    const message = document.getElementById("message").value;
    addMessage(sender, message);

    // Clear the form fields
    document.getElementById("sender").value = "";
    document.getElementById("message").value = "";

    // Update the message list
    updateMessageList();
});

// Sample messages (you can load messages from a database in a real project)
addMessage("Alice", "Happy birthday, Victor!");
addMessage("Bob", "Wishing you a fantastic birthday!");

// Initial update of the message list
updateMessageList();
