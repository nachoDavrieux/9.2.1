document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buttonText").addEventListener("click", () => {
    const input1 = document.getElementById("inputText").value;
    let cantidadDatos = localStorage.getItem("cantidadDatos");
    if (cantidadDatos == null) {
      localStorage.setItem("cantidadDatos", 1);
      cantidadDatos = 1;
    } else {
      cantidadDatos++;
      localStorage.setItem("cantidadDatos", cantidadDatos);
    }
                        //dato1
    localStorage.setItem(`dato${cantidadDatos}`, input1);
  });
});


/* 

const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");
buttonText.addEventListener("click", () => {
    const inputValue = inputText.value;
if (inputValue.trim() !== "") {
        localStorage.setItem("userInput", inputValue);
    }
});

*/