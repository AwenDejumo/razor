// Function to handle the "Login" button click
function login() {
    // Get the email and password from the input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if the email and password match the expected values
    if (email === "zurieldejumo203@gmail.com" && password === "pogingbarbero") {
        // If the email and password match, store the email and password in local storage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Redirect the user to the dashboard page
        window.location.href = "index.html";
    } else {
        // If the email and password don't match, display an error message
        alert("Invalid email or password");
    }
}

 