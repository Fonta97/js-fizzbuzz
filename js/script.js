let output = 0;

let div = document.querySelector(".box");

for (let i = 1; i <= 100; i++) {

    let square = document.createElement("div");
    square.classList.add("quadrato");
    div.append(square);

    if ((i % 15) === 0) {

        output = "BuzzFizz";
        square.classList.add("bf_quadrato")
        square.append(output);
        console.log(output);

    } else if ((i % 3) === 0) {

        output = "Fizz";
        square.classList.add("f_quadrato")
        square.append(output);
        console.log(output);

    } else if ((i % 5) === 0) {

        output = "Buzz";
        square.classList.add("b_quadrato")
        square.append(output);
        console.log(output);

    } else {

        output = i;
        square.append(output);
        console.log(output);

    }


}

