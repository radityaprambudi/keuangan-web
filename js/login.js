function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("auto push test")

    if (username === "admin" && password === "admin") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Login Gagal!");
    }
}