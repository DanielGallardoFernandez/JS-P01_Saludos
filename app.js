
hello.addEventListener("click", function (event) {
    event.preventDefault();
  console.log("Bienvenido");
  
  console.log("El script se ha cargado correctamente");

const name = document.querySelector("#name").value;

const age = document.querySelector("#age").value;

const respuesta = document.querySelector("#respuesta");

let emoji ="";

if (age > 18) {
  for(let i = 0; i<age;i++ ){
    emoji = emoji + '🍺';
  }
} else {
  for(let i = 0; i<age; i++){
    emoji = emoji + '🥛';
  }
}
respuesta.innerHTML = `Hola ${name}! Brindemos con ${emoji} `;
});


