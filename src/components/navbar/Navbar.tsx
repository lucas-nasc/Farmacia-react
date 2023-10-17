import { Link } from 'react-router-dom';
import carrinho from "../../assets/carrinho.png";
import user from "../../assets/user.png";



function Navbar() {

  return (
     <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/' className='text-2xl font-bold uppercase text-white'>Farmacia</Link>
            <label className="relative block w-96">
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 text-black rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Pesquisar" type="text" name="search"/>
              </label>

            <div className='flex gap-4'>
              <Link to='/categories' className='hover:underline text-white'>Categorias</Link>
              <Link to='/cadastroCategory' className='hover:underline text-white'>Cadastrar Categoria</Link>
              <img src={carrinho} alt="" className="imagem" />
              <img src={user} alt="" className="imagem" />
            </div>
          </div>
        </div>
  )
}

export default Navbar