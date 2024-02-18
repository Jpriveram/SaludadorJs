import saludar from "./saludar";
import s_edad from "./edad";
import s_genero from "./genero";
import s_hora from "./hora";
import s_fecha from "./fecha";
import s_idioma from "./idioma"

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const idioma_input =document.querySelector("#idioma")
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value;
  const genero = genero_input.value;
  const idioma = idioma_input.value;
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

  if (idioma != "es" && idioma != "en") {
    window.alert("Elige una opcion valida")
    location.reload();
  }
  if (idioma == "en") 
  {
    if (horaActual >= 1 && horaActual < 12) {
      if(edad>=30 )
      {
        if (genero=='m') 
        {
          div.innerHTML = "<p> Good Morning Mr " + saludar(nombre) + "</p>";
        }
        else
        {
          div.innerHTML = "<p> Good Morning Ms " + saludar(nombre) + "</p>";
        }
       
      }
      else
      {
        div.innerHTML = "<p> Good Morning " + saludar(nombre) + "</p>";
      }
    }
    
    if (horaActual >= 12 && horaActual < 19) {
      if(edad>=30 )
      {
        if (genero=='m') 
        {
          div.innerHTML = "<p> Good Afternoon Mr " + saludar(nombre) + "</p>";
        }
        else
        {
          div.innerHTML = "<p> Good Afternoon Ms " + saludar(nombre) + "</p>";
        }
       
      }
      else
      {
        div.innerHTML = "<p> Good Afternoon  " + saludar(nombre) + "</p>";
      }
    }
    
    if (horaActual >= 19) {
      if(edad>=30 )
      {
        if (genero=='m') 
        {
          div.innerHTML = "<p> Good Night Mr " + saludar(nombre) + "</p>";
        }
        else
        {
          div.innerHTML = "<p> Good Night Ms " + saludar(nombre) + "</p>";
        }
       
      }
      else
      {
        div.innerHTML = "<p> Good Night " + saludar(nombre) + "</p>";
      }
    }
    }
  
  else
  {
    if (horaActual >= 1 && horaActual < 12) {
      if(edad>=30 )
      {
        if (genero=='m') 
        {
          div.innerHTML = "<p> Buen Dia Señor " + saludar(nombre) + "</p>";
        }
        else
        {
          div.innerHTML = "<p> Buen Dia Señora " + saludar(nombre) + "</p>";
        }
       
      }
      else
      {
        div.innerHTML = "<p> Buen Dia " + saludar(nombre) + "</p>";
      }
    }

    if (horaActual >= 12 && horaActual < 19) {
      if(edad>=30 )
      {
        if (genero=='m') 
        {
          div.innerHTML = "<p> Buenas Tardes Señor " + saludar(nombre) + "</p>";
        }
        else
        {
          div.innerHTML = "<p> Buenas Tardes Señora " + saludar(nombre) + "</p>";
        }
       
      }
      else
      {
        div.innerHTML = "<p> Buenas Tardes " + saludar(nombre) + "</p>";
      }
    }
    
    if (horaActual >= 19) 
    {
      if(edad>=30 )
      {
        if (genero=='m') 
        {
          div.innerHTML = "<p> Buenas Noches Señor " + saludar(nombre) + "</p>";
        }
        else
        {
          div.innerHTML = "<p> Buenas Tardes Noches " + saludar(nombre) + "</p>";
        }
       
      }
      else
      {
        div.innerHTML = "<p> Buenas Noches " + saludar(nombre) + "</p>";
      }
    }
  }


 // div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";
});