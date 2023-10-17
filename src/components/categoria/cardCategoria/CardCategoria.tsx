import Categoria from "../../../models/Categoria";


interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.name}</p>
          <p className='text-slate-100 bg-red-400 w-full flex items-center justify-center'>
            {categoria.description}
          </p>
        </div>
    )
  }
    
    export default CardCategoria