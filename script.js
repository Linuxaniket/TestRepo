document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.createElement("button");
  button.innerText = "Click Me";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    alert("Button was clicked!");
  });
});
