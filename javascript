document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username and password input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple authentication (replace with backend authentication)
    if (username === 'admin' && password === 'password') {
        // Display product list
        document.getElementById('product-list').style.display = 'block';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
