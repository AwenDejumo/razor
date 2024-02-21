// Function to handle the "Logout" button click
function logout() {
    // Clear the stored email and password (if any)
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    // Redirect the user to the login page
    window.location.href = "user.html";

    // Prevent the form from submitting
    return false;
}

// Function to check if the user is logged in
function checkLogin() {
    // Get the stored email and password (if any)
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // If the email and password are stored (i.e., not null), redirect the user to the dashboard page
    if (storedEmail && storedPassword) {
        window.location.href = "logout.html";
    }
}

// Call the checkLogin() function when the page loads
window.onload = checkLogin;