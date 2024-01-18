$(document).ready(function () {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    document.getElementById("succsessreg").classList.remove("visible");
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.getElementById("succsessreg").classList.remove("visible");
  });
});

const users = [
  {
    name: "Harry",
    email: "hpotter@hogwards.com",
    password: "wizzardzrule777",
    age: 17,
    gender: "male",
  },
  {
    name: "Hermione",
    email: "hgrainger@hogwards.com",
    password: "qDjVontJqoQdkvl",
    age: 17,
    gender: "female",
  },
  {
    name: "Rick",
    email: "rsanchez@science.com",
    password: "LbmtDXfzYJwDTKA",
    age: 78,
    gender: "male",
  },
];

function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const user = {
    name,
    email,
    password,
    age,
    gender,
  };

  users.push(user);
  console.log(user);
  console.log(users);
  container.classList.remove("right-panel-active");
}

function checkLogin() {
  $(".sign-in-container input").each(function () {
    let fieldValue = $(this).val();
    if (fieldValue.trim() === '') {
      $(this).parent(".input-box").addClass('error-highlight');
      return false;
    } else {
      $(this).parent(".input-box").removeClass('error-highlight');
    }
  });

  let login = document.getElementById("loginemail").value;
  let password = document.getElementById("loginpassword").value;

  for (let i = 0; i < users.length; i++) {
    if (login === users[i].email && password === users[i].password) {
      document.getElementById("wrong-user").classList.remove("visible");
      document.getElementById("succsessreg").classList.remove("visible");
      document.getElementById("loginform").reset();
      alert('Welcome ' + users[i].name);
      break;
    } else {
      document.getElementById("wrong-user").classList.add("visible");
    }
  }
};

function checkReg() {
  const regform = document.getElementById("regform");
  let inputs = regform.getElementsByTagName("input");

  for (const input of inputs) {
    let login = input.value;
    if (login === "") {
      input.closest(".checkfield").classList.add("error-highlight");
      return;
    } else {
      input.closest(".checkfield").classList.remove("error-highlight")
      if (input.classList.contains('emailfield')) {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(login)) {
          document.getElementById("emailvalid").classList.add("visible");
          return;
        } else {
          document.getElementById("emailvalid").classList.remove("visible");
          for (let i = 0; i < users.length; i++) {
            if (login === users[i].email) {
              document.getElementById("emailvalid").innerHTML = "User with that email already exists";
              document.getElementById("emailvalid").classList.add("visible");
              return;
            } else {
              document.getElementById("emailvalid").classList.remove("visible");
              document.getElementById("emailvalid").innerHTML = "Please provide a valid email address";
            }
          }
        }
      }
      if (input.classList.contains('passwfield')) {
        let letter = /[a-z]/;
        let upper = /[A-Z]/;
        let number = /[0-9]/;
        let regularExpression = /[!@#$%^&*_]/;

        let message = document.getElementById("passwvalid");

        if (login.length < 6 || !letter.test(login) || !number.test(login) || !upper.test(login) || !regularExpression.test(login)) {
          if (login.length < 6) {
            message.innerHTML = "Please make sure password is longer than 6 characters.";
            message.classList.add("visible");
            return;
          }
          if (!letter.test(login)) {
            message.innerHTML = "Please make sure password includes a lowercase letter.";
            message.classList.add("visible");
            return;
          }
          if (!number.test(login)) {
            message.innerHTML = "Please make sure Password Includes a Digit.";
            message.classList.add("visible");
            return;
          }
          if (!upper.test(login)) {
            message.innerHTML = "Please make sure password includes an uppercase letter.";
            message.classList.add("visible");
            return;
          }
          if (!regularExpression.test(login)) {
            message.innerHTML = "Please make sure password includes special character.";
            message.classList.add("visible");
            return;
          }
        }
        else {
          message.classList.remove("visible");
        }
      }
    }
  }

  addUser();
  document.getElementById("succsessreg").classList.add("visible");
  document.getElementById("regform").reset();
};