//10.6.2. Variable Shadowing

let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();