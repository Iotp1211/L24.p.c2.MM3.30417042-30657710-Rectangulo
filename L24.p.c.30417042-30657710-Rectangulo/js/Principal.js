/*
Considerando que un rectángulo varía de un cuadrado sólo 
porque la altura no es igual a la base, diseñe la clase 
Cl_rectangulo que herede de Cl_cuadrado, y luego haga un 
programa que determine el área y el perímetro de un rectángulo 
(área= base * altura, perímetro= 2*base + 2*altura).
*/
import Cl_Rectangulo from "./Cl_Rectangulo.js";

let rec1 = new Cl_Rectangulo(4, 2);
let rec2 = new Cl_Rectangulo(3, 5);

let salida = document.getElementById("1");
salida.innerHTML = `
<br>Base del rectangulo: ${rec1.base}
<br>Altura del rectangulo: ${rec1.altura}<br>
<br>Area del rectangulo: ${rec1.area()}<br>
<br>Perimetro del rectangulo: ${rec1.perimetro()}<br>
<br><br>
<br>Base del rectangulo: ${rec2.base}
<br>Altura del rectangulo: ${rec2.altura}<br>
<br>Area del rectangulo: ${rec2.area()}<br>
<br>Perimetro del rectangulo: ${rec2.perimetro()}
`