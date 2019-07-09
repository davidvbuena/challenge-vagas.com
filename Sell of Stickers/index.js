//Carrega configuração de botôes

window.onload = document.getElementById("BotaoSubtracao").style.pointerEvents =
  "none";
window.onload = document.getElementById("BotaoSubtracao").style.opacity = "0.3";

document.getElementById("CustomCheckBoxReact").classList.add("Estilo-Checkbox");
document.getElementById("CustomCheckBoxVue").classList.add("Estilo-Checkbox");
document
  .getElementById("CustomCheckBoxAngular")
  .classList.add("Estilo-Checkbox");

//Envia Formulário

document.getElementById("BotaoEnviar").onclick = function EnviaFormulario() {
  var d = document.getElementById("QuantidadeStickers").value;
  var e = document.getElementById("React").checked;
  var f = document.getElementById("Vue").checked;
  var g = document.getElementById("Angular").checked;
  var h = document.getElementById("textObservacoes").value;

  //Condições de validade ("cheched","Quantidade" e configuração quando enviado)

  if (e == "" && f == "" && g == "") {
    document.getElementById("alert").innerHTML =
      "Selecione quais stickers você deseja!";
  } else if (d == 0) {
    document.getElementById("alert").innerHTML =
      "Insira a quantidade que você deseja!";
    document.getElementById("QuantidadeStickers").style.backgroundColor =
      "#F59393";
    document.getElementById("QuantidadeStickers").style.border =
      "1px solid #F33232";
  } else if (isNaN(d)) {
    document.getElementById("alert").innerHTML = "Insira um número";

    document.getElementById("QuantidadeStickers").style.backgroundColor =
      "#F59393";
    document.getElementById("QuantidadeStickers").style.border =
      "1px solid #F33232";
  } else {
    document.getElementById("FormularioEnviadoSucesso").innerHTML =
      "Formulário enviado com sucesso!";
    document.getElementById("alert").style.display = "none";
    document.getElementById("Observacoes").style.display = "none";

    document.getElementById("BotaoSubtracao").style.pointerEvents = "none";
    document.getElementById("BotaoSubtracao").style.opacity = "0.3";

    document.getElementById("BotaoSoma").style.pointerEvents = "none";
    document.getElementById("BotaoSoma").style.opacity = "0.3";

    document.getElementById("QuantidadeStickers").value = "0";
    document.getElementById("QuantidadeStickers").style.opacity = "0.3";

    document.getElementById("BotaoEnviar").disabled = true;
    document.getElementById("BotaoEnviar").classList.add("BotaoEnviado");
    document.getElementById("BotaoEnviar").style.pointerEvents = "none";

    document
      .getElementById("CustomCheckBoxReact")
      .classList.add("Estilo-CheckBoxEnviado");
    document.getElementById("CustomCheckBoxReact").style.pointerEvents = "none";
    document.getElementById("SVGReact").style.display = "none";

    document
      .getElementById("CustomCheckBoxVue")
      .classList.add("Estilo-CheckBoxEnviado");
    document.getElementById("CustomCheckBoxVue").style.pointerEvents = "none";
    document.getElementById("SVGVue").style.display = "none";

    document
      .getElementById("CustomCheckBoxAngular")
      .classList.add("Estilo-CheckBoxEnviado");
    document.getElementById("CustomCheckBoxAngular").style.pointerEvents =
      "none";
    document.getElementById("SVGAngular").style.display = "none";

    var Formulario = {
      Quantidade: d,
      React: e,
      Vue: f,
      Angular: g,
      Text: h,
    }

    JSON.parse(localStorage.getItem("d"));
    console.log(Formulario);
  }
};

//Componentes de botões dos contadores

var contador = 0;

document.getElementById("BotaoSoma").onclick = function Soma() {
  if (contador == 0) {
    document.getElementById("BotaoSubtracao").disabled = false;
    document.getElementById("BotaoSubtracao").style.opacity = "1.0";
    document.getElementById("BotaoSubtracao").style.pointerEvents = "auto";

    document.getElementById("QuantidadeStickers").style.backgroundColor =
      "#dde3e9";
    document.getElementById("QuantidadeStickers").style.border =
      "1px solid #2F3676";
  }

  contador++;

  document.getElementById("QuantidadeStickers").value = contador;
};

document.getElementById("BotaoSubtracao").onclick = function Sub() {
  if (contador == 1) {
    document.getElementById("BotaoSubtracao").disabled = true;
    document.getElementById("BotaoSubtracao").style.opacity = "0.3";
    document.getElementById("BotaoSubtracao").style.pointerEvents = "none";
  }

  if (contador > 0) {
    contador--;
    document.getElementById("QuantidadeStickers").value = contador;
  }
};
