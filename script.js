function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;

  var elementoValorConvertidoReal = document.getElementById(
    "valorConvertidoReal"
  );
  var valorConvertidoReal = "O valor em reais é R$ " + valorEmReal;
  elementoValorConvertidoReal.innerHTML = valorConvertidoReal;

  var valorEmBitcoin = valorEmDolarNumerico / 46000;

  var elementoValorConvertidoBitcoin = document.getElementById(
    "valorConvertidoBitcoin"
  );

  var valorEmEuro = valorEmDolarNumerico * 0.85;
  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );
  var valorConvertidoEuro = "O valor em euro é € " + valorEmEuro;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;

  var valorConvertidoBitcoin = "O valor em bitcoins é ₿ " + valorEmBitcoin;
  elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
}