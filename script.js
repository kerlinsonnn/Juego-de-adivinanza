//Genera un número aleatorio entre 1 y 100 y lo almacena en la variable 'randomNumber' .
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Inicializa el contador de intentos en 0.
let attempts = 0;

// Define la funcion 'checkGuess', que se llama cuando el usuario intenta adivinar el nimero.
function checkGuess() {
    // Obtiene el valor del campo de entrada donde el usuario escribe su adivinanza.
const guessInput = document.getElementById ('guessInput');

   // Obtiene el elemento donde se mostrara el mensaje al usuario.
const message = document.getElementById( 'message'); 

   // Convierte el valor ingresado por el usuario a un número y lo almacena en la variable 'guess'.
const guess = Number(guessInput.value);

   // Incrementa el contador de intentos cada vez que se llama a esta función.
attempts++;

   // Compara la adivinanza del usuario con el número aleatorio generado.
   if (guess === randomNumber) {
    //Si la adivinanza es correcta, muestra un mensaje de éxito.
    message.textContent =  `¡Correcto! El número era ${randomNumber}. Intentos: ${attempts}`;
    //Reinicia el juego después de un acierto.
    resetGame();
   } else if (guess <randomNumber) {
     //Si la adivinanza es menor que el número, muestra un mensaje indicando que es demasiado bajo.
     message.textContent = 'Demasiado bajo. Intenta de nuevo.';
   } else {
    //Si la adivinanza es meyor que el número, muestra un mensaje indicando que es demasiado bajo.
     message.textContent = 'Demasiado alto. Intenta de nuevo.';
   }
}

//Define la función 'resetGame', que reinicia el juego.
function resetGame() {
   //Genera un nuevo número aleatorio entre 1 y 100.
   randomNumberm = Math.floor(Math.random() * 100) + 1;

   //Reinicia el contador de intentos a 0.
   attempts = 0;

   //Limpia el campo de entrada del usuario para que pueda ingresar una nueva adivinanza.
   document.getElementById('guess').value = '';
}



