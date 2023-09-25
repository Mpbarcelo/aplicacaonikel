const nome = "Marcia P. B.";
let nome2 = "";
//objeto
let pessoaDefalt = {
  nome: "Maria",
  idade: "39",
  trabalho: "Logística"
}

//array

let nomes = ["Lucas", "Ana", "José"]; //lista
let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Maria",
        idade: "39",
        trabalho: "Logística"
      },

      {
        nome: "joão",
        idade: "45",
        trabalho: "motorista"
      }
];

//console.log("valor inicial:");
//console.log(nome2);

//nome2 = "Maria"

//console.log("valor alterado:");
//console.log(nome2);

function alterarNome() {
  nome2 = "Mara Silva";
  console.log("valor alterado:");
  console.log(nome2);
}

function recebeEalteraNome(novoNome) {
  nome2 = novoNome;
  console.log("valor alterado recebendo nome:");
  console.log(nome2);
}

function imprimirPessoa(pessoa) {
  console.log(pessoa);

  console.log("nome:");
  console.log(pessoa.nome);

  console.log("idade:");
  console.log(pessoa.idade);

  console.log("trabalho:");
  console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("-----------IMPRIMIRPESSOAS-------------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);
    });
}

imprimirPessoas();

console.log("-----------IMPRIMIRPESSOAS-------------");
adicionarPessoa({
    
        nome: "Carlos",
        idade: "65",
        trabalho: "Operador"
      
});

//console.log(pessoas);

//console.log(nomes[0]); //imprimindo a posição do array

//console.log(pessoas);
//imprimirPessoa(pessoaDefalt);

//imprimirPessoa({
   // nome: "Ana",
  //idade: "29",
  //trabalho: "cabeleleira"
//});



//recebeEalteraNome("Joana");
//recebeEalteraNome("Marcia");

//alterarNome();
