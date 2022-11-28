let userData = JSON.parse(localStorage.getItem("signin"));
let user = document.getElementById("user");

user.innerText = userData.name;
