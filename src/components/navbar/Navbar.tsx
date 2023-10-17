import { Link } from 'react-router-dom';



function Navbar() {

  return (
     <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/' className='text-2xl font-bold uppercase text-white'>Farmacia</Link>

            <div className='flex gap-4'>
              <h3 className='font-medium'>Produtos</h3>
              <Link to='/categories' className='hover:underline text-white'>Categorias</Link>
              <Link to='/cadastroCategory' className='hover:underline text-white'>Cadastrar Categoria</Link>
              <h3 className='font-medium'>Perfil</h3>
              <h3 className='font-medium'>Sair</h3>
            </div>
          </div>
        </div>
  )
}

export default Navbar