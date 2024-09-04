export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    produtos.forEach((produto) => this.produtos.push(produto));
  }
  quantidadeProdutos(): number {
    return this.produtos.length;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number
  ) {}

}

const produto1 = new Produto('Camiseta', 49.9);
console.log(produto1.nome);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1); // recebe um ou mais produtos

console.log(carrinhoDeCompras); // CarrinhoDeCompras { produtos: [ Produto { nome: 'Camiseta', preco: 49.9 } ] }
console.log(carrinhoDeCompras.quantidadeProdutos()); // 1
console.log(carrinhoDeCompras.valorTotal()); // 49.9


// uma classe precisa da outra para funcionar
