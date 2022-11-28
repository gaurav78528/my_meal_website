let signupLS = JSON.parse(localStorage.getItem("signup")) || [];
let submit_btn = document.getElementById("submit_btn");

// console.log(signupLS.email);
function isEmpty() {
  let Name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log("clicked");
  if (Name != "" && email != "" && password != "") {
    submit_btn.removeAttribute("disabled");
  }
}

function signup() {
  let obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  let isRegistered = false;
  signupLS.forEach(function (elem) {
    // console.log(elem.email);
    if (obj.email === elem.email) {
      isRegistered = true;
    }
  });
  if (isRegistered == true) {
    alert("User Already Exist");
  } else if (obj.password.length < 8) {
    alert("Password Should be of 8 length");
  } else {
    signupLS.push(obj);
    localStorage.setItem("signup", JSON.stringify(signupLS));
    alert("Signup Successfully!");
    window.location.href = "login.html";
  }
}
