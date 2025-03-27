
//lista de produtos
const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.0 },
    { id: 2, nome: 'Produto 2', preco: 20.0 },
    { id: 3, nome: 'Produto 3', preco: 30.0 }
  ];

//função para adicionar um novo produto à lista
  function inserirProduto(nome, preco) {

      const novoProduto = {
        id: produtos.length+1,
        nome: nome,
        preco: preco
  
      };

      produtos.push(novoProduto);

    return novoProduto;
    }

  const produtoInserido = inserirProduto('Produto 4', 40.0);
  console.log(produtoInserido);  // mostra o novo produto
     


function listarProdutos() {
    return produtos;
}

console.log(produtos); 
