import prompt  from "prompt-sync";
let ler = prompt()

console.log(`
digite o modelo do carro: luxo R$150 & popular R$90
km percorrido:
dias ocupados:`)

let carros = {
    modelo:ler(),
    Kilometragem: Number(ler()),
    dias: Number(ler())
}

let soma = 0

if(carros.modelo == "luxo"){

 if(carros.Kilometragem <= 200){
    
    soma = (carros.Kilometragem * 0.30) + (carros.dias *150)
}else if(carros.Kilometragem >200){
    soma = (carros.Kilometragem * 0.25) + (carros.dias *150)
}

}else if(carros.modelo == "popular"){
if(carros.Kilometragem <= 100){
    
    soma = (carros.Kilometragem * 0.20) + (carros.dias *90)
}else if(carros.Kilometragem >100){
    soma = (carros.Kilometragem * 0.10) + (carros.dias *90)
}
}
console.log(soma)
