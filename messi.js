function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display').value;

    // Reemplazo de ^ para hacer la operación de potencia usando **
    display = display.replace(/\^/g, '**');

    // Cálculo de porcentaje
    display = display.replace(/(\d+)%/g, '($1/100)');

  try {
        let result = eval(display);
        document.getElementById('display').value = result + ' 😊'; // Muestra el resultado con la carita feliz
    } catch (error) {
        document.getElementById('display').value = 'Error 😪'; // Muestra mensaje de error con carita triste
    }
}
