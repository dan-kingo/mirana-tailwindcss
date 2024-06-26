const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.innerHTML = "Please wait...";
  result.style.color = "#fff";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.style.color = "teal";
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
      result.style.color = "crimson";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

const menuButton = document.getElementById("menuButton");
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-x-full");
  if (mobileMenu.classList.contains("-translate-x-full")) {
    menuIcon.classList.replace("bx-x", "bx-menu-alt-right");
  } else {
    menuIcon.classList.replace("bx-menu-alt-right", "bx-x");
  }
});

// Close menu on link click
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    menuIcon.classList.replace("bx-x", "bx-menu-alt-right");
  });
});
let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;
