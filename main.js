import Serie from "./serie.js";
import E from "./e.js";

let s1 = new Serie (4, 17);

let e1= new E(3);


console.log("por Felipe López Ortega Aceves");
console.log("En el primer ejercicio, la serie, se muestra un vector, el primer valor es el resultado aproximado según los limites establecidos, el segundo muestra los valores que intervieron y el tercer vector muestra las operaciones que se realizaron para llegar al resultado ");
console.log(s1.getValue());
console.log(s1.getLimit());
console.log(s1.serie());


console.log(e1.getLimit());
console.log("Para mostrar el resultado, se muestra un vector con dos componentes, el primero es el resultado de los valores e y el segundo es un vector que muestra los valores que se sumaron para llegar a ese resultado");
console.log(e1.operation());