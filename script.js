
const root = document.documentElement;
const body = document.body;
const teamo=document.querySelector("#teamo")

let generador = 0;

root.addEventListener("click", e=>{
   if(e.target.classList.value =="no"){
    alert("a")
   }
   if(e.target.classList.value =="si" && generador <6){
    e.target.classList = "no";
    e.target.innerText = "NO";
   
    generateSiButton(generador)
   } else {
        teamo.style.display="block"
   }

})


function generateSiButton(intento){
    let x = (generarNumeroRandom(0,310)).toString();
    let y = (generarNumeroRandom(148,700)).toString()

    generador ++
    let newButton = document.createElement('button');
    newButton.textContent = "Si";
    newButton.classList = "si";
    newButton.style.position = "absolute";
    newButton.style.left = x + "px"
    newButton.style.top = y + "px"

    body.appendChild(newButton)
}

function generarNumeroRandom(min,max){
    return Math.floor(Math.random() * (max-min+1)) 
}

