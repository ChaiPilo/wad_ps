console.log("In script.js");

const handleSubmit = () => {
  console.log("btn clicked");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const usernameRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).*$/;

  var errors = [];

  if (!username || !password) {
    alert("Please fill all the details");
    return;
  }
  if (username.length < 8) {
    errors.push("Username must be of atleast 8 charcters");
  }
  if (!usernameRegex.test(username)) {
    errors.push(
      "Username must contains at least one BLOCK letter alphabet, one small Letter alphabet, one special character, one number"
    );
  }

  if (password.length < 8) {
    errors.push("Password must be of atleast 8 charcters");
  }

  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must contains at least one BLOCK letter alphabet, one small Letter alphabet & one special character"
    );
  }

  if (errors.length > 0) {
    var error = errors.join("\n");
    alert(error);
  } else {
    alert("Successfully Logged In");
  }
};
