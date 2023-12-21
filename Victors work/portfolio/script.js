document.addEventListener("DOMContentLoaded", function () {
    // Function to show the error message
    function showError(message) {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }

    // Example: Check if a condition is met and show an error
    const someCondition = false; // Replace with your condition
    if (someCondition) {
        showError("An error occurred! Please check your input.");
    }
});
