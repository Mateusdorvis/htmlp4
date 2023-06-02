
window.onload = function () {
   //execute um JS imediatamente após o carregamento da página.

   var seconds = 00;
   var tens = 00;
   var appendTens = document.getElementById('tens'); // acrescentar os decimais
   var appendSeconds = document.getElementById('seconds');
   var buttonStart = document.getElementById('button-start');
   var buttonStop = document.getElementById('button-stop');
   var buttonReset = document.getElementById('button-reset');
   var Interval; //é uma função que existe no JS  
   buttonStart.onclick = function () {
      clearInterval(Interval) //o estado clearInterval limpa o temporizador definido com o metodo setInterval()
      Interval = setInterval(startTimer, 10);
      // o metodo setInterval chama uma função em intervalo especificos(milissegundos)
   };
   buttonStop.onclick = function () {
      clearInterval(Interval); //mesma coisa
   };
   buttonReset.onclick = function () {
      clearInterval(Interval);
      tens = "0";
      seconds = "00"
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
   };
   function startTimer() {
      tens++ // ++ pos incremento e --- ++ é pré icremento
      if (tens <= 9) {
         appendTens.innerHTML = "0" + tens;
      };

      if (tens > 9){
         appendTens.innerHTML = tens;
      };

      if (tens >99){ //tens se for maior que 99
         console.log('seconds')

         seconds++

         appendSeconds.innerHTML= "0" + seconds;

         tens = 0;

         appendTens.innerHTML = "0" + 0
      };

      if (seconds > 9){
         appendSeconds //apendseconds é uma váriavel criada
         .innerHTML = seconds
      }
   }

}