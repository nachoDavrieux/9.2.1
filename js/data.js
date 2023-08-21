document.addEventListener("DOMContentLoaded", () => {
  const dato123 = localStorage.getItem("dato");
  document.getElementById("data").innerHTML = dato123;
});
