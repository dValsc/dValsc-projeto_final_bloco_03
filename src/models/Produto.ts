import Categoria from './Categoria.ts';

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    foto: string;
    categoria: Categoria | null;
}