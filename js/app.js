//Calcular el precio total
const product = {count: 3, price: 12.55, type: "ropa" };
if (product.count <=0){ 
    total = 0
} else if (product.count>0){
    total = product.count * product.price
};
console.log("Total: " , total + "€");
 
//Calcular el IVA


switch(product.type){
    case "libros":
        tipoIVA = 0.04; break; 
    case "alimentación":
        tipoIVA = 0.1; break; 
    default: tipoIVA = 0.21;
};
console.log(total * tipoIVA + "€");

const IVA = total * tipoIVA;
console.log(IVA);
console.log(total + IVA);

//Calcular el sueldo neto en nómina

const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14
};
//Calcular retenciones


if (empleado.bruto < 12000) {
    retencion = 0;
} else if (empleado.bruto < 24000) {
    retencion = 0.08;
} else if (empleado.bruto < 34000) {
    retencion = 0.16;
} else {
    retencion = 0.3;
};
console.log(empleado.bruto * retencion);

let sueldoNetoAnual = empleado.bruto * retencion

if (empleado.hijos >=2 && empleado.bruto >12000){
    sueldoNetoAnual = empleado.bruto * 0.2
};
console.log(sueldoNetoAnual + "€");

let sueldoNetoM = empleado.pagas == 14 ? sueldoNetoAnual / 14 : sueldoNetoAnual / 12;
console.log("Sueldo neto Mensual: " +  sueldoNetoM + "€");


function getTotalVat(product) {
    return product.count >0 ? product.count * getVat(product) : 0;
};
function getVat(product){
    let iva = 0;
    switch (product.type){
        case "libro": iva = 0.04; break;
        case "alimentacion" : iva = 0.1; break;
        default: iva = 0.21; break;
    }
    return iva;
}
console.log("Total de IVA a pagar es de: " + getTotalVat(product));



