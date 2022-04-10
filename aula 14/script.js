function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const buttonCalc = document.querySelector('.buttonCalc');
    
        function recebeEventoForm(evento){
        evento.preventDefault(); 

        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        const imc = peso / (altura * altura);

        resultado.innerHTML = ''
        resultado.innerHTML += `Seu IMC é ${imc.toFixed(2)}`
        buttonCalc.innerHTML = 'Calcular';
        buttonCalc.style.background="#0A6961";
        buttonCalc.style.cursor="pointer";

        if (imc <= 18.5) {
            resultado.innerHTML += ` (Abaixo do peso)`

        } else if(imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML += ` (Peso normal)`

        } else if(imc >= 25 && imc <= 29.9) {
            resultado.innerHTML += ` (Sobrepeso)`

        }else if(imc >= 30 && imc <= 34.9) {
            resultado.innerHTML += ` (Obesidade grau 1)`

        }else if(imc >= 35 && imc <= 39.9) {
            resultado.innerHTML += ` (Obesidade grau 2)`

        }else if(imc >= 40) {
            resultado.innerHTML += ` (Obesidade grau 3)`

        }else {
            resultado.innerHTML = ''
            buttonCalc.innerHTML = 'Insira um valor para calcular';
            buttonCalc.style.background = '#ad2d49';
            buttonCalc.style.cursor = 'no-drop';
        }
        
    }
    form.addEventListener('submit', recebeEventoForm);



}
meuEscopo();