//1 galon = 3.785 litros
//cantidad de galones
//precio por galones

let precioGalone = +prompt("Cuantos es el precio por galon?");

let cantidadGalones = +prompt("Cuantos galones se vendieron");

const galoneXlitro = 3.785;

let conversionAlitros = cantidadGalones * galoneXlitro;

let ganancia = precioGalone * conversionAlitros;

alert(`Recibira ${ganancia} por la entrega de produccion de hoy.`);

