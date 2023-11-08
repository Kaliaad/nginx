function calculate() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var number3 = parseFloat(document.getElementById('number3').value);

    var half = number1 * 0.5;
    var quarter1 = number2 * 0.25;
    var quarter2 = number3 * 0.25;

    var result = half + quarter1 + quarter2;
    document.getElementById('result').innerText = result;
}
