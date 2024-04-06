document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "Agatha Santos" && password === "160405") {
        window.location.href = "index.html"; 
    } else {
        alert("Nome de usuário ou senha incorretos. Por favor, tente novamente."); 
    }
});