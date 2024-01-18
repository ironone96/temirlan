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

$(document).ready(function () {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
});


function checkLogin() {
    $(".sign-in-container input").each(function () {
        var fieldValue = $(this).val();
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
          alert('Welcome ' + users[i].name);
          document.getElementById("account-err").classList.remove("acc-error-visible");
          break;
        } else {
          document.getElementById("account-err").classList.add("acc-error-visible")
        }
      }
};



function checkReg() {
    $(".sign-up-container input").each(function () {
        var fieldValue = $(this).val();

        if (fieldValue.trim() === '') {
            $(this).parent(".input-box").addClass('error-highlight');
            return false;
        } else {
            $(this).parent(".input-box").removeClass('error-highlight');
        }
    });
};