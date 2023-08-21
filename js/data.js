document.addEventListener("DOMContentLoaded", () => {
  const cantidadDatos = localStorage.getItem("cantidadDatos");
  for (let index = 1; index <= cantidadDatos; index++) {
    const element = localStorage.getItem(`dato${index}`);;
    document.getElementById("data").innerHTML += element + "</br>";
  }
});
