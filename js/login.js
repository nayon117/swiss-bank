document.getElementById("btn-submit").addEventListener('click', function () {
    const emailField = document.getElementById("email-field");
    const email = emailField.value;
     
    const passWordField = document.getElementById("user-password");
    const password = passWordField.value;
    if (email === "admin@gmail.com" && password === "1234") {
        window.location.href = 'bank.html'
    } else {
        alert("please type your email and password correctly")
    }
});