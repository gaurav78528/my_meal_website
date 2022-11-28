let signupLS = JSON.parse(localStorage.getItem("signup")) || [];
function login() {
  let obj = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  let isSignedIn;
  signupLS.forEach(function (elem) {
    if (elem.email === obj.email && elem.password === obj.password) {
      isSignedIn = true;
      localStorage.setItem("signin", JSON.stringify(elem));
    } else if (elem.email !== obj.email || elem.password !== obj.password) {
      isSignedIn = false;
    }
  });
  if (isSignedIn === true) {
    // localStorage.setItem("signin", JSON.stringify(elem));
    alert("Log In Successfully.");
    window.location.href = "index.html";
  } else {
    alert("Wrong Credentials!!");
  }
}
