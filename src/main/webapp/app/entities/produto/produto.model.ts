export interface IProduto {
  id?: number;
  nome?: string | null;
  valor?: number | null;
  descricao?: string | null;
}

export class Produto implements IProduto {
  constructor(public id?: number, public nome?: string | null, public valor?: number | null, public descricao?: string | null) {}
}

export function getProdutoIdentifier(produto: IProduto): number | undefined {
  return produto.id;
}
