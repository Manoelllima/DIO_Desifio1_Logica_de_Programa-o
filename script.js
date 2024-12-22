console.log("------Desafio 1 Logica de Programação------ \n------Classificador de nível de Herói------\n");

//Atributos do heroi
let nomeHeroi = "Lucas"; //altere para o seu nome
let exp = 0; 
const ranks = ['Ferro','Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal' ,'Radiante'];
let rankAtual = ranks[0];


console.log("------ um inimigo apareceu ------");
console.log("------ Vamos upar! ------\n");

//Batalha com base na quantidade de caracteres do nome
for(let i = 0; i <= nomeHeroi.length; i++){
    console.log("------ Você derrotou o inimigo! ------");
    exp += Math.floor(Math.random() * 2000); //Valor da exp ganhada e gerado aleatoriamente e guardada na variavel exp
    console.log(`Você ganhou um total de ${exp} experiencia\n`);

    if(i == nomeHeroi.length){
        console.log(`Fim da Batalha!\n`);
    }
}

if(exp < 1000){
    rankAtual = ranks[0];
}
else if(exp > 1001 && exp < 2000){
    rankAtual = ranks[1];
}
else if(exp > 2001 && exp < 5000){
    rankAtual = ranks[2];
}
else if(exp > 5001 && exp < 7000){
    rankAtual = ranks[3];
}
else if(exp > 7001 && exp < 8000){
    rankAtual = ranks[4];
}
else if(exp > 8001 && exp < 9000){
    rankAtual = ranks[5];
}
else if(exp > 9001 && exp < 10000){
    rankAtual = ranks[6];
}
else{
    rankAtual = ranks[7];
}

console.log(`O Herói de nome ${nomeHeroi} está no rank de ${rankAtual} com um total de exp: ${exp}`);