$(function(){
  var model = {
    "cats" : [
      {
        "nome" : "Snarf",
        "url" : "_imagens/Snarf.jpg",
        "contador" : 0
      },
      {
        "nome" : "Ada",
        "url" : "_imagens/Ada.png",
        "contador" : 0
      },
      {
        "nome" : "Juju",
        "url" : "_imagens/Juju.png",
        "contador" : 0
      },
      {
        "nome" : "Jimi",
        "url" : "_imagens/Jimi.jpg",
        "contador" : 0
      },
      {
        "nome" : "Fryda",
        "url" : "_imagens/Fryda.jpg",
        "contador" : 0
      }
    ],

    init: function(){

    }
  };

  var octopus = {

    getCatByID : function(id){
      return model.cats[id];
    },

    getCats: function(){
      return model.cats;
    },

    init: function(){
      model.init();
      view.init();
    }
  };

  var view = {

    "count" : 0,

    clicker : function(){
      $("#CurentCat").click(function(e) {
        count++;
        $("#contador").text(count);
      })
    },

    bindCatButton : function(id){
      $("#bGato" + id).click(function(){
         var cat = octopus.getCatByID(id);
         $("#CurentCat").attr("src", cat.url);
         $("#NomeDoGato").text(cat.nome);
         $("#contador").text(cat.contador);
         count = cat.contador;
      })
    },

    render: function(index){

    },

    li : function(){
      var data = "%data%";
      var cats = octopus.getCats();
      var lista1 = '<li><button id="%data%" type="button">';
      var lista2 = ' %data% </button></li>';
      var total = "";
        if(cats.length > 0){
          for(var i = 0; i < cats.length; i++){
            total = lista1.replace(data,"bGato" + i) + lista2.replace(data,cats[i].nome);
            $("#list").append(total);
            view.bindCatButton(i);
          }
          cats = "";
        }
    },

    init: function(){
      view.li();
      view.render();
      view.clicker();
    }
  };

  octopus.init();
});
