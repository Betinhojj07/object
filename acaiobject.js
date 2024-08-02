import prompt from "prompt-sync"
let ler = prompt()



console.log(`
escolha a quantidade de acais:
acai pequeno R$10,00
acai medio: R$15,00
acai grande: R$20,00
`)
let acai = {
   acaipequeno: Number(ler()),
   acaimedio: Number(ler()),
   acaigrande: Number(ler())
}
let mult = acai.acaipequeno * 10 + acai.acaimedio * 15 + acai.acaigrande * 20

console.log(`O valor a ser pago é de R$${mult}`)
