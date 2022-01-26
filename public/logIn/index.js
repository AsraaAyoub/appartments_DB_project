const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };
  console.log(JSON.stringify(data));
  fetch("/logIn", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        window.location.href = "/allposts";
      } else {
        alert(res.message);
      }
    });
});
