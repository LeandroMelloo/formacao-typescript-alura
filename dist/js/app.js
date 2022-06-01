import { Negociacao } from "./models/negociacao"; 

// instânciando negociação
const negociacao = new Negociacao(new Date(), 10, 100);
negociacao.data = 'Leandro'
console.log(negociacao.data);