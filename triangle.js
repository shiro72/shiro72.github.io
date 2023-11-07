function verify() {
    console.log("X, Y, Z")
    let X = parseFloat(elementX.value);
    let Y = parseFloat(elementY.value);
    let Z = parseFloat(elementZ.value);
    console.log(X, Y, Z)

    if (X * X + Y * Y === Z * Z || X * X + Z * Z === Y * Y || Y * Y + Z * Z === X * X) {
        result = "Треугольник существует и является прямоугольным"
        document.getElementById("result").innerText =  result;
        check = true;
    } else {
        result = "Треугольник не существует или не является прямоугольным"
        document.getElementById("result").innerText =  result;
        check = false;
    }
}

function send() {
    if (check) {
        document.getElementsById("result").value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ошибка")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementX = document.getElementById("X");
elementX.addEventListener('input', verify);

const elementY = document.getElementById("Y");
elementY.addEventListener('keyup', verify);

const elementZ = document.getElementById("Z");
elementZ.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
