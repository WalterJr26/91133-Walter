document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Usuário:", username);
    console.log("Senha:", password);

    
    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos.");
    }


    localStorage.setItem("username", username);

    
    window.location.href = "painel.html";
    alert("Login bem sucedido!!")

});
