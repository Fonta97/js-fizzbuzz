let output = 0;

let div = document.querySelector("box");

for (var i = 1; i <= 100; i++) {

    let square = document.createElement("div");
    square.classList.add("quadrato");
    div.append(square);

    if ((i % 15) === 0) {

        output = "BuzzFizz";
        console.log(output);

    } else if ((i % 3) === 0) {

        output = "Fizz";
        console.log(output);

    } else if ((i % 5) === 0) {

        output = "Buzz";
        console.log(output);

    }

    output = i;
    console.log(output);

}

