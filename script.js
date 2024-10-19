        Function appendToDisplay(value) {
            Document.getElementById(‘display’).value += value;
        }

        Function clearDisplay() {
            Document.getElementById(‘display’).value = ‘’;
        }

        Function deleteLast() {
            Let display = document.getElementById(‘display’).value;
            Document.getElementById(‘display’).value = display.slice(0, -1);
        }

        Function calculate() {
            Let display = document.getElementById(‘display’).value;

            // Reemplazo de ^ para hacer la operación de potencia usando **
            Display = display.replace(/\^/g, ‘**’);

            // Cálculo de porcentaje
            Display = display.replace(/(\d+)%/g, ‘($1/100)’);

    Try {
                Let result = eval(display);
                Document.getElementById(‘display’).value = result + ‘ 😊’;
            } catch (error) {
                Document.getElementById(‘display’).value = Error + ‘ 😪’;
            }

}
