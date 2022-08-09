//const idadeDependente =Number(prompt("Solicitação de dependente \n Qual a idade do dependente"))

/*
if(idadeDependente>=13){
    if(idadeDependente<18){
        console.log("Seu filho já pode ter um acartão vinculado ao seu");
    }else{
        console.log("Consulte outras possibilidades do Labank");
    }
}else{
    console.log("Consulte outras possibilidades do Labank");
}

if(idadeDependente>=13 && idadeDependente<18){
    console.log("Seu filho já pode ter um acartão vinculado ao seu");
}else{
    */


//console.log(idadeDependente===13? 'Seu filho já pode ter um cartão vinculado ao seu':'verifique as opçoes  possiveis')
/*
const numeroRamal = Number(prompt("solicitação"))

switch(numeroRamal){
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    case 3:
    console.log(3)
        break;
    case 4:
        console.log(4)
        break;
    default:
        console.log("escolha")
}*/

const ola = Number(prompt ("digite um numero"))
/*
if(ola%2 ===0 && ola%3 ===0 ){
    console.log("seu numero é disivel por 2")
 }else{
    console.log('digite um numero')
}*/

if(ola%3 ===0){
    if(ola%2 ===0){
    console.log("seu numero é divisivel por 2 e por 3")
    
    console.log(ola===30?"ufaaaa acertei":"não foi dessa vez" )
    
    switch(ola){
        case 6:
            console.log("digitou 6")
            break;
        case 12:
            console.log("digitou 12")
            break;
        case 18:
            console.log("digitou 18")
            break;
        case 24:
            console.log("digitou 24")
            break;
        case 30:
            console.log("digitou 30")
            break;
        default:
            console.log("digite um numero maior que 6 e menor que 30 ")}
    }else{
        console.log('seu numero nao é divivel por 3 e por 2')
}

}else{
    console.log('seu numero nao é divisivel por 2 e por 3')
}



