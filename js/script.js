

var nbtr = 10; //nb de tr
var nbtd = 10; //nb de td
$(document).ready(function(){ //lorsque la page est chargé
//Création tableau nbtr*nbtd
//tab est une variable qui "pointera" sur le tableau html pour le manipuler avec jQuery
  tab = $("<table />", { //objet pour les attributs
  css : { //attribut css
  border: 'solid 1px transparent'
  }
});
//on créé les tr
  for(i=0;i<nbtr;i++)
  {
    //chaque tr doit être ajouté au tableau (variable tab)
    tr = $('<tr />').appendTo(tab); //tr -> variable
    //et pour chaque tr on créé les td
    for(j=0;j<nbtd;j++)
    {
      //chaque td doit être ajouté au tr (variable tr)
      td = $("<td id='x"+j+"y"+i+"'/>").appendTo(tr);
    }
  }
//on peut ajouter les tableau html à body...
tab.appendTo('section');
//mise en for css
//$('td').css('background-color','#fdeecf'); 
$('tr:even td:even, tr:odd td:odd').addClass("vide");
//$('tr:even td:even, tr:odd td:odd').addClass("sombre");


for (i=1;i<5;i++)
{
  $('tr:even:nth-child('+i+') td:even, tr:odd:nth-child('+i+') td:odd').append("<img class='noir'  src='img/noir.png'>");	
}
for (i=7;i<11;i++)
{
  $('tr:even:nth-child('+i+') td:even, tr:odd:nth-child('+i+') td:odd').append("<img class='bois'  src='img/bois.png'>");	
}

  var idrissX = 0;
  var idrissY = 0;
  while(idrissY < 10)
  {
    while(idrissX < 10)
    {
      if((idrissY % 2 != 0 && idrissX % 2 == 0) || (idrissY % 2 == 0 && idrissX % 2 != 0))
        $("#x" + idrissX + "y" + idrissY).css('background-color','#fdeecf');
      idrissX++;
    }
    idrissX = 0;
    idrissY++;
  }
//mettre des valeurs croissantes
// $('td').each(function(i){ //Explorer un objet-tableau jquery avec each
// $(this).attr("id",i);
// });

var tour1 =true;
var tour2 =false;
var stock1="";
var stock2="";
var jeton ="";

function verifbois (toto){
  var droite = "x" + (parseInt(toto[1],10) + 1) +"y" + (parseInt(toto[3],10) - 1);
  var gauche = "x" + (parseInt(toto[1],10) - 1) +"y" + (parseInt(toto[3],10) - 1);
  var sautedroite= "x" + (parseInt(toto[1],10) + 2) +"y" + (parseInt(toto[3],10) - 2);
  var sautegauche = "x" + (parseInt(toto[1],10) - 2) +"y" + (parseInt(toto[3],10) - 2);
  
  if ($("#" + droite).html() == "") {
    $("#"+droite).css("background-color","rgb(0,255,0)");
  }else{
    $("#"+droite).css("background-color","rgb(255,0,0)");
  }

  if ($("#" + gauche).html() == "") {
    $("#"+gauche).css("background-color","rgb(0,255,0)");
  }else{
    $("#"+gauche).css("background-color","rgb(255,0,0)");
  }

  if (($("#"+droite).children().attr("class"))=="noir"&& $("#" + sautedroite).html() == "" ){
    $("#"+sautedroite).css("background-color","rgb(0,254,0)");
    stock1 = droite;
  }else{
    $("#"+sautedroite).css("background-color","rgb(255,0,0)");
  }

  if (($("#"+gauche).children().attr("class"))=="noir"&& $("#" + sautegauche).html() == "" ){
    $("#"+sautegauche).css("background-color","rgb(0,253,0)");
    stock2 = gauche;
  }else{
    $("#"+sautegauche).css("background-color","rgb(255,0,0)");
  
  }
}

function verifnoir (toto){
  var droite = "x" + (parseInt(toto[1],10) + 1) +"y" + (parseInt(toto[3],10) + 1);
  var gauche = "x" + (parseInt(toto[1],10) - 1) +"y" + (parseInt(toto[3],10) + 1);
  var sautedroite= "x" + (parseInt(toto[1],10) + 2) +"y" + (parseInt(toto[3],10) + 2);
  var sautegauche = "x" + (parseInt(toto[1],10) - 2) +"y" + (parseInt(toto[3],10) + 2);
  
  if ($("#" + droite).html() == "") {
    $("#"+droite).css("background-color","rgb(0,255,0)");
  }else{
    $("#"+droite).css("background-color","rgb(255,0,0)");
  }

  if ($("#" + gauche).html() == "") {
    $("#"+gauche).css("background-color","rgb(0,255,0)");
  }else{
    $("#"+gauche).css("background-color","rgb(255,0,0)");
  }
  
  if (($("#"+droite).children().attr("class"))=="bois"&& $("#" + sautedroite).html() == "" ){
    $("#"+sautedroite).css("background-color","rgb(0,254,0)");
    stock1 = droite;
  }else{
    $("#"+sautedroite).css("background-color","rgb(255,0,0)");
  }

  if (($("#"+gauche).children().attr("class"))=="bois"&& $("#" + sautegauche).html() == "" ){
    $("#"+sautegauche).css("background-color","rgb(0,253,0)");
    stock2 = gauche;
  }else{
    $("#"+sautegauche).css("background-color","rgb(255,0,0)");
  
  }
}

$(".bois").click(function(){
if ( tour1 == true){
  
    var iden = $(this).parent().attr("id");
    verifbois(iden);   
    jeton = this;
    tour1 = false;
    
 
}
});

$(".noir").click(function(){
if ( tour2 == true){
  
    var iden = $(this).parent().attr("id");
    verifnoir(iden);   
    jeton = this;
    tour2 = false;
    
 
}
}); 

$(".vide").click(function(){
  if( ($(this).css("background-color")) == "rgb(0, 255, 0)"){
    $(this).append(jeton);
    $(".vide").css("background-color","rgb(110, 65, 41)");

    if (($(jeton).attr("class"))=="bois") {
    tour2=true;
    
    }else if(($(jeton).attr("class"))=="noir") {
      tour1=true;
    }
  }else if (($(this).css("background-color")) == "rgb(255, 0, 0)") {
    $(".vide").css("background-color","rgb(110, 65, 41)");
    
    if (($(jeton).attr("class"))=="bois") {
    tour1=true;
    
    }else if(($(jeton).attr("class"))=="noir") {
      tour2=true;
    }
  }else if (($(this).css("background-color")) == "rgb(0, 254, 0)"){
    $(this).append(jeton);
    $("#" + stock1).empty();
    $(".vide").css("background-color","rgb(110, 65, 41)");
    
    if (($(jeton).attr("class"))=="bois") {
    tour2=true;
    
    }else if(($(jeton).attr("class"))=="noir") {
      tour1=true;
    }
  }else if (($(this).css("background-color")) == "rgb(0, 253, 0)"){
    $(this).append(jeton);
    $("#" + stock2).empty();
    $(".vide").css("background-color","rgb(110, 65, 41)");

    if (($(jeton).attr("class"))=="bois") {
    tour2=true;
    
    }else if(($(jeton).attr("class"))=="noir") {
      tour1=true;
    }
  }
});



// $(function(){
// // appel du plugin
//     $('.noir,.bois').draggable({
//     	 revert : 'invalid', // l'élément est renvoyé à sa place s'il n'est pas déposé dans la bonne zone
//     	cursor : 'move', // on modifie le curseur pour faciliter la compréhension du visiteur
//     	 snap : '.sombre',
    	 
// });
     
// $(".sombre").droppable({
	
// 	accept:'.bois,.noir',
	

// });
// });

//fin de la méthode ready
});
// $(function(){
//   $("#rotate").click(function(){
//     $("section").toggleClass("spinEffect");
//   });
// });
// $(function(){
//   $("#rotate1").click(function(){
//     $("section").toggleClass("spinEffect");
//   });
// });

