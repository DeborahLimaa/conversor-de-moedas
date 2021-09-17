function ConverterDolar() {
  var valorElementoReal = parseFloat(document.getElementById("valor").value);
  console.log(valorElementoReal);

  var valorEmDolar = (valorElementoReal / 5).toFixed(2);
  console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é U$ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElementoReal = parseFloat(document.getElementById("valor").value);
  console.log(valorElementoReal);
  var valorEmEuro = (valorElementoReal / 6).toFixed(2);
  console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Euro é € " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}
