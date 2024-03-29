function calcularGET() {
    var objNome = document.getElementById("nome").value;
    var objIdade = parseFloat(document.getElementById("idade").value);
    var objSexo = document.getElementById("sexo").value;
    var objPeso = parseFloat(document.getElementById("peso").value);
    var objAltura = parseFloat(document.getElementById("altura").value);

    if (objNome && objIdade && objPeso && objAltura) {
        var gastoCalorico;

        if (sexo === 'masculino') {
            gastoCalorico = 66 + (13.75 * objPeso) + (5 * objAltura) - (6.8 * objIdade);
        } else {
            gastoCalorico = 655 + (9.56 * objPeso) + (1.85 * objAltura) - (4.68 * objIdade);
        }

        var objDivResultado = objNome + "<h2>Resultado:</h2>";
        objDivResultado += "<table border = 1>";
        objDivResultado += "<tr><th>Nome</th><th>Idade</th><th>Peso (kg)</th><th>Altura (cm)</th><th>Sexo</th><th>Gasto Calórico</th></tr>";
        objDivResultado += "<tr><td>" + objNome + "</td><td>" + objIdade + "</td><td>" + objPeso + "</td><td>" + objAltura + "</td><td>" + objSexo + "</td><td>" + gastoCalorico.toFixed(2) + " cal/dia</td></tr>";
        objDivResultado += "</table>";

        document.getElementById("resultado").innerHTML = objDivResultado;
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}