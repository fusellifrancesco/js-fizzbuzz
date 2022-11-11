let container = document.querySelector(".my-container");

for (let numero = 1; numero <= 100; numero++ ) {

    if ((numero % 3) == 0 && (numero % 5) == 0) {

        container.innerHTML += '<div class="square"><p>FIZZBUZZ</p></div>';
        console.log("FIZZBUZZ");

    } else if ((numero % 5) == 0) {

        container.innerHTML += '<div class="square"><p>BUZZ</p></div>';
        console.log("buzz");

    } else if ((numero % 3) == 0) {

        container.innerHTML += '<div class="square"><p>FIZZ</p></div>';
        console.log("fizz")

    } else {
        
        container.innerHTML += '<div class="square"><p>' + numero + '</p></div>';
        console.log(numero);

    }
}