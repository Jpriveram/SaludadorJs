import saludar from "./saludar";
import s_edad from "./edad";
import s_genero from "./genero";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value;
  const genero = genero_input.value;

  if(edad>=30 )
  {
    if (genero=='m') 
    {
      div.innerHTML = "<p> Hola Señor " + saludar(nombre) + "</p>";
    }
    else
    {
      div.innerHTML = "<p> Hola Señora " + saludar(nombre) + "</p>";
    }
   
  }
  else
  {
    div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";

  }


 // div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";
});