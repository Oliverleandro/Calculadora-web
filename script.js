const excutar = () => {
const a = eval(document.getElementById("v1").value);
const b = eval(document.getElementById("v2").value);
let oper = eval(document.getElementById("oper").selectedIndex);
let resultado = (oper==0)?somar(a,b): (oper==1)?subtrair(a,b):
(oper==2)?multiplicar(a,b): (oper==3)?dividir(a,b): exponencial(a,b); 
document.getElementById("resp").innerHTML = `O resultado da operação é ${resultado}`;
}
console .log()