var imagenes_a_cargar = [
     
     
    "base.png", 
    "brazo_der.png", 
    "cola.png", 
    "cola_2.png", 
    "UI_cola.png",
    "UI_cola_2.png",
    "brazo.png", 
    "UI_brazo.png",
    "brazo_2.png",
    "UI_brazo_2.png", 
    "pantalones.png", 
    "pantalones_2.png",
    "capucha_red.png",
    "UI_capa_red.png",
    "capa_back_red_1.png",
    "capa_back_red_2.png",
    "capa_back_red_3.png",
    "capa_front_red_1.png",
    "capa_front_red_2.png",
    "capa_front_red_3.png",
    "vestido.png", 
    "vestido_2.png",
    "brazo.png",
    "brazo_2.png",
    "orejas.png",
    "UI_orejas.png",
    "orejas_red.png",
    "mascara_1.png",
    "mascara_1_hood.png",
    "mascara_2.png",
    "mascara_2_hood.png", 
    "mascara_3.png", 
    "mascara_3_hood.png", 
    "adorno.png",
    "UI_adorno.png"
 ];
 function  section_change( item ){  
    document.getElementById("section_mascaras").style.display= "none";
    document.getElementById("section_pantalones").style.display= "none";
    document.getElementById("section_vestidos").style.display= "none";
    document.getElementById("section_brazo").style.display= "none";
    document.getElementById("section_cola").style.display= "none";
    document.getElementById("section_adorno").style.display= "none";
    document.getElementById("section_orejas").style.display= "none";
    document.getElementById("section_capa").style.display= "none";
    //seccion seleccionada
    // console.log("section_"+ item );
    document.getElementById("section_"+ item ).style.display= "inherit";
}
precarga( imagenes_a_cargar );
porcentaje =  "0%" ;
document.getElementById("porcentaje").innerHTML = porcentaje;
document.getElementById("barra").style.width = porcentaje;

var imagenes_cargadas = 0;
var numero_total;

function precarga( item ){ 
    // ------------- limpiar los datos para re-utilizacion -----------------
   porcentaje = "0%";
   document.getElementById("preloader").innerHTML = " ";
   imagenes_cargadas = 0;
   numero_total =  item.length;
 

   item.forEach(mostrar_imagenes_en_preloader);
   
   function mostrar_imagenes_en_preloader(item, index){
    document.getElementById("preloader").innerHTML +=    '<img  id="preloaded_element_'+ index +'" src="img/'+ item +'" >' ;
   }

   var imagenes_en_preloader = $('#preloader').children('img').map(function() {return $(this).attr('id'); }).get()
   imagenes_en_preloader.forEach(precargar_imagenes);
   
   function precargar_imagenes(item, index){
       item ="#"+ item;
       $(item).on('load', function() {
           imagenes_cargadas++;
           console.log(   "cargada imagen: "+ imagenes_cargadas +" de "+ numero_total );
           // ------------- calcular y mostrar el porcentaje -----------------
           porcentaje = imagenes_cargadas* 100/  numero_total;   // saco el porcentaje de las imagenes cargadas
           porcentaje = porcentaje.toFixed() //convertir en numero entero
           porcentaje =  porcentaje + "%" ;
           document.getElementById("porcentaje").innerHTML = porcentaje;
           document.getElementById("barra").style.width = porcentaje;
           // ------------- terminado -----------------
           if( imagenes_cargadas == numero_total){
               console.log(" ");
               console.log("//carga completada//"); 
               console.log(" ");
               document.getElementById("terminado").style.display = "inherit";
            }
        })// load function
    }//precargar_imagenes
}


 
 document.getElementById("base").style.backgroundImage ="url('img/base.png')";
 document.getElementById("brazo_der").style.backgroundImage ="url('img/brazo_der.png')";
 document.getElementById("brazo").style.backgroundImage ="url('img/brazo_2.png')";




 function cambiar(a,b) {
    if (b == 'none') {
        document.getElementById(a).style.backgroundImage = "none";
    } else {
        document.getElementById(a).style.backgroundImage ="url('img/"+ b +".png')";
    }
    var brazo_url = document.getElementById("brazo").style.backgroundImage.slice(4, -1).replace(/"/g, "");
    
    if (  capa_active == true) { cambiar_capa(1) }
    if ( brazo_url == 'img/brazo_2.png' && capa_active == true ) { cambiar_capa(2)}
    if ( brazo_url == 'img/brazo.png'  && capa_active == true) { cambiar_capa(3) }
    
    var adorno_url = document.getElementById("adorno").style.backgroundImage.slice(4, -1).replace(/"/g, "");
    
    if ( adorno_url == 'img/adorno.png' && capa_active == true ) {  document.getElementById("adorno").style.backgroundImage ="url('img/adorno_hood.png')";}
    
    var mascara_url = document.getElementById("mascara").style.backgroundImage.slice(4, -1).replace(/"/g, "");
    
    if ( mascara_url == 'img/mascara_1.png' && capa_active == true ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_1_hood.png')";}
    if ( mascara_url == 'img/mascara_2.png' && capa_active == true ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_2_hood.png')";}
    if ( mascara_url == 'img/mascara_3.png' && capa_active == true ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_3_hood.png')";}
    //if ( mascara_url == 'img/brazo.png'  && capa_active == true) { cambiar_capa(3) }


   if ( orejas_active == true && capa_active == true ) {  document.getElementById("orejas").style.backgroundImage ="url('img/orejas_red.png')"; }
   if ( orejas_active == true && capa_active == false ) {  document.getElementById("orejas").style.backgroundImage ="url('img/orejas.png')"; }
 
   //console.log( brazo_url );
  
 }
 var capa_active = false; 
 var mascara_active = false; 
 var orejas_active = false; 

 function poner_capa() {  

capa_active = true; 

var brazo_url = document.getElementById("brazo").style.backgroundImage.slice(4, -1).replace(/"/g, "");

if (  capa_active == true) { cambiar_capa(1) }
if ( brazo_url == 'img/brazo_2.png' && capa_active == true ) { cambiar_capa(2)}
if ( brazo_url == 'img/brazo.png'  && capa_active == true) { cambiar_capa(3) }





if ( orejas_active == true && capa_active == true ) {  document.getElementById("orejas").style.backgroundImage ="url('img/orejas_red.png')"; }


var adorno_url = document.getElementById("adorno").style.backgroundImage.slice(4, -1).replace(/"/g, "");


  if ( adorno_url == 'img/adorno.png' && capa_active == true ) {  document.getElementById("adorno").style.backgroundImage ="url('img/adorno_hood.png')";}


var mascara_url = document.getElementById("mascara").style.backgroundImage.slice(4, -1).replace(/"/g, "");


  if ( mascara_url == 'img/mascara_1.png' && capa_active == true ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_1_hood.png')";}
  if ( mascara_url == 'img/mascara_2.png' && capa_active == true ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_2_hood.png')";}
  if ( mascara_url == 'img/mascara_3.png' && capa_active == true ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_3_hood.png')";}
  //if ( mascara_url == 'img/brazo.png'  && capa_active == true) { cambiar_capa(3) }

}


 function quitar_capa() { 

   capa_active = false;

   document.getElementById("capa_back").style.backgroundImage = "none";
 document.getElementById("capa_front").style.backgroundImage ="none";
  document.getElementById("capucha").style.backgroundImage ="none";


  if ( orejas_active == true && capa_active == false ) {  document.getElementById("orejas").style.backgroundImage ="url('img/orejas.png')"; }


  var adorno_url = document.getElementById("adorno").style.backgroundImage.slice(4, -1).replace(/"/g, "");
  if ( adorno_url == 'img/adorno_hood.png' ) {  document.getElementById("adorno").style.backgroundImage ="url('img/adorno.png')";}


  var mascara_url = document.getElementById("mascara").style.backgroundImage.slice(4, -1).replace(/"/g, "");


if ( mascara_url == 'img/mascara_1_hood.png' ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_1.png')";}
if ( mascara_url == 'img/mascara_2_hood.png' ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_2.png')";}
if ( mascara_url == 'img/mascara_3_hood.png' ) {  document.getElementById("mascara").style.backgroundImage ="url('img/mascara_3.png')";}


  }

 function cambiar_capa(a) { 
   if (a == 'none') {

     document.getElementById("capa_back").style.backgroundImage = "none";
 document.getElementById("capa_front").style.backgroundImage ="none";
  document.getElementById("capucha").style.backgroundImage ="none";
} else {
    
     document.getElementById("capa_back").style.backgroundImage ="url('img/capa_back_red_"+a+".png')";
 document.getElementById("capa_front").style.backgroundImage ="url('img/capa_front_red_"+a+".png')";
  document.getElementById("capucha").style.backgroundImage ="url('img/capucha_red.png')";

  }
 }