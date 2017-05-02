var data = "%data%";
var contador = 0;
var texto = '<p id="contador">0</p>';
var cats = [
  {
    "nome" : "Snarf",
    "url" : "_imagens/Snarf.jpg"
  },
  {
    "nome" : "Ada",
    "url" : "_imagens/Ada.png"
  },
  {
    "nome" : "Juju",
    "url" : "_imagens/Juju.png"
  },
  {
    "nome" : "Jimi",
    "url" : "_imagens/Jimi.jpg"
  },
  {
    "nome" : "Fryda",
    "url" : "_imagens/Fryda.jpg"
  }
];


//Creates the list.
var lista1 = '<li id="%data%">';
var lista2 = ' %data% </li>';
var total = "";
if(cats.length > 0){
  for(var i = 0; i < cats.length; i++){
    total = lista1.replace(data,cats[i].nome + "li") + lista2.replace(data,cats[i].nome);
    $("#list").append(total);
  }
};

var id = "";
var contador = "";
var i = 0;
var idG = '<figure id="%data%" style="display : none ;"><img';
var foto = ' src="%data%" alt="Gato">';
var descri =   '<figcaption>%data%</figcaption></figure>';
var contadorC = '<p id="%data%"> 0 </p>';
var total = "";
var contS = 0;
var contA = 0;
var contJ = 0;
var contJi = 0;
var contF = 0;


$("#Snarfli").click(function(e){
  var snarf = document.getElementById('#SnarfClick');
  snarf.replace("none", "Auto");
});

$("#Adali").click(function(e){
  contador = "AdaC";
  i = 1;
  total = idG.replace(data,cats[i].nome) + foto.replace(data,cats[i].url) + descri.replace(data,cats[i].nome) + contadorC.replace(data,contador);
  $("#corpo").append(total);
});

$("#Jujuli").click(function(e){
  contador = "JujuC";
  i = 2;
  total = idG.replace(data,cats[i].nome) + foto.replace(data,cats[i].url) + descri.replace(data,cats[i].nome) + contadorC.replace(data,contador);
  $("#corpo").append(total);
});

$("#Jimili").click(function(e){
  contador = "JimiC";
  i = 3;
  total = idG.replace(data,cats[i].nome) + foto.replace(data,cats[i].url) + descri.replace(data,cats[i].nome) + contadorC.replace(data,contador);
  $("#corpo").append(total);
});

$("#Frydali").click(function(e){
  contador = "FrydaC";
  i = 4;
  total = idG.replace(data,cats[i].nome) + foto.replace(data,cats[i].url) + descri.replace(data,cats[i].nome) + contadorC.replace(data,contador);
  $("#corpo").append(total);
});


//Criação dos itens dos gatos.

if(cats.length > 0){
  for(var i = 0; i < cats.length; i++){
    contador = cats[i].nome + "C";
    total = idG.replace(data,cats[i].nome + "Click") + foto.replace(data,cats[i].url) + descri.replace(data,cats[i].nome) + contadorC.replace(data,contador);
    $("#corpo").append(total);
  }
}






//Incremento de contadores(não funciona).
CurentCat

$("#AdaClick").click(function(e) {
  contA++;
  $("#AdaC").text(contA);
});

$("#JujuClick").click(function(e) {
  contJ++;
  $("#JujuC").text(contJ);
});

$("#JimiClick").click(function(e) {
  contJi++;
  $("#JimiC").text(contJi);
});

$("#FrydaClick").click(function(e) {
  contF++;
  $("#FrydaC").text(contF);
});
