const biblioteca = []; 
let livros = {
  nome: "",
  tamanho: "",
  autor: "",
  genero: "",
};
let opcao = 0;
let buscaRemover = "";
let achou = 0;
const mensagem = "Seja bem vindo ao menu da biblioteca! Escolha sua opção:\n\t1 - Adicionar livro\n\t2 - Remover Livro\n\t3 - Listar livros\n\t4 - Sair";
console.log(mensagem);
process.stdin.on("data", function (data) {
  let typein = data.toString().trim();
  if (opcao == 0) {
      opcao = Number(typein)
    if (opcao == 1) {
      console.log("Informe o nome do livro: ");
    } else if (opcao == 2) {
      console.log("Informe o nome do livro que deseja remover:");
    } else if (opcao == 3) {
      console.log(biblioteca);
      opcao = 0;
      console.log(mensagem);
    } else if (opcao == 4) {
      process.exit();
    }
  } else
    switch (opcao) {
      case 1:
        if (!livros.nome) {
          livros.nome = typein;
          console.log("Agora informe o tamanho do livro:");
        } else if (!livros.tamanho) {
          livros.tamanho = typein;
          console.log("Qual é o autor do livro?");
        } else if (!livros.autor) {
          livros.autor = typein;
          console.log("Por último, informe o gênero do livro:");
        } else if (!livros.genero) {
          livros.genero = typein;
          console.log("Parabéns! Livro cadastrado");
          biblioteca.push(livros);
          livros = {
            nome: "",
            tamanho: "",
            autor: "",
            genero: "",
          };
          opcao = 0;
          console.log(mensagem);
        }
        break;
      case 2:
        buscaRemover = typein;
        for (let i = 0; i < biblioteca.length; i++) {
          if (buscaRemover == biblioteca[i].nome) {
            biblioteca.splice(i, 1);
            console.log("Livro removido!");
            achou++;
            opcao = 0;
            console.log(mensagem);
          }
        }
        break;
    }
});
