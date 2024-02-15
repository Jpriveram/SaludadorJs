import saludar from "./saludar";
import s_edad from "./edad";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value;

  if(edad>=30)
  {
    div.innerHTML = "<p> Hola senor@ " + saludar(nombre) + s_edad(edad)+ "</p>";
  }
  else
  {
    div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";

  }


 // div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";
});