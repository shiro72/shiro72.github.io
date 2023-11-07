function verify() {
    console.log("X, Y, Z")
    let X = parseFloat(elementX.innerText);
    let Y = parseFloat(elementY.innerText);
    let Z = parseFloat(elementZ.innerText);
    console.log(X, Y, Z)

    if (X * X + Y * Y === Z * Z || X * X + Z * Z === Y * Y || Y * Y + Z * Z === X * X) {
        result = "Треугольник существует и является прямоугольным"
        document.getElementById("result").innerText =  result;
    } else {
        result = "Треугольник не существует или не является прямоугольным"
        document.getElementById("result").innerText =  result;
    }
}

const elementX = document.getElementById("X");
const elementY = document.getElementById("Y");
const elementZ = document.getElementById("Z");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);