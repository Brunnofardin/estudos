//////////////////////////   Calculos \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const operadores = [(n1,n2)=>{return n1+n2},(n1,n2)=>{return n1-n2},(n1,n2)=>{return n1/n2},(n1,n2)=>{return n1*n2}];

//////////////////////////////  números \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
let n1 = 0;
let n2 = 0;

const numeros = [...document.getElementsByClassName("num")]
const resultado = document.getElementById("s-3")
const res = resultado.firstElementChild

//////////////////////////// Operações  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const operacoes = [...document.getElementsByClassName('op')];

operacoes.map((el,i,a)=>{
    el.addEventListener('click',()=>{
        numeros.map((el,i,a)=>{
            if(i == 1){
                n1 = Number(el.firstElementChild.value)
            }else if(i == 2){
                n2 = Number(el.firstElementChild.value)
               
            }
        })
        if(n1 == 0 || n2 == 0){
            alert('Digite um valor para N1 e para N2')
        }else{
            res.innerHTML = "Resultado: "+operadores[i](n1,n2)
        }

    })
})
