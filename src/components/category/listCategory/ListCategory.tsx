import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../service/Service';
import CardCategory from '../cardCategory/CardCategory';
import { toastAlerta } from '../../../utils/toastAlert';
import ICategory from '../../../models/ICategory';

function ListaCategorias() {
  const [category, setCategory] = useState<ICategory[]>([
    {
        id: 1,
        name: 'aleatorio',
        description: 'aleatorio'
    },
    {
        id: 2,
        name: 'aleatorio',
        description: 'aleatorio'
    },
    {
        id: 3,
        name: 'aleatorio',
        description: 'aleatorio'
    }
])

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategory() {
    try {
      await buscar('/categoria', setCategory, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if(error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

/*   useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]); */

/*   useEffect(() => {
    buscarCategory();
  }, [category.length]); */
  return (
    <>
      {category.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.map((category) => (
              <>
                <CardCategory key={category.id} category={category} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;