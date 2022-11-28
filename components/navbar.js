function navbar() {
  return `<nav>
        <div class="row">
          <img src="logo.png" alt="logo" class="logo" />

          <ul class="main_nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="randomMeal.html">Random Meal</a></li>
            <li><a href="signup.html">SignUp</a></li>
            <li><a href="login.html" id="user">LogIn</a></li>
          </ul>
        </div>
      </nav>`;
}

export default navbar;
