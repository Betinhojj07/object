import prompt from "prompt-sync"
let ler = prompt()

console.log(`
Dados:
nome:
diciplina:
idade:`)

let dados = {
    nome: ler(),
    diciplina: ler(),
    idade: Number(ler())
}

let array =[]
let soma = 0

console.log("digite 3 notas")
for(let i = 0;i<3;i++){

    let nt = {
        nota: Number(ler())
    }

    array[i]=nt.nota

    soma = soma + array[i]
}
let med = soma/array.length

for(let propriedade in dados){
    console.log(`${propriedade}:${dados[propriedade]}`)
}
console.log("notas")
for(let item of array){
    console.log(item)
}
console.log("a média do aluno é", med.toFixed(2))

if(med < 5){
    console.log("reprovado")
}else {
    console.log("aprovado")
}