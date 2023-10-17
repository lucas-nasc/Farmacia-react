interface CardProdutoProps {
  caminhoImagem: string;
  descricao: string;
  valor: number;
}

export default function CardProduto(props: CardProdutoProps) {

    function formatarValor(valor:number){
        const real = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return real.format(valor);
        
        
    }

  return (
    <div className="w-3/12 rounded-lg bg-white overflow-hidden">
      <div className="flex flex-col justify-center items-center px-2 py-2 h-72">
        <img className="w-48 h-48 block" src={props.caminhoImagem}></img>
        <p>{props.descricao}</p>
        <p>{formatarValor(props.valor)}</p>
      </div>
      <button className="w-full text-center text-white bg-blue-600 py-2 px-2">
        Comprar
      </button>
    </div>
  );
}
