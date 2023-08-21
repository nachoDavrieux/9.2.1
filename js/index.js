document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buttonText").addEventListener("click", () => {
    const input1 = document.getElementById("inputText").value;
    localStorage.setItem("dato", input1)
  });
});
