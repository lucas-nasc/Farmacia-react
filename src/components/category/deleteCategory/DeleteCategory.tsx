import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import ICategory from '../../../models/ICategory'
import { deletar } from '../../../service/Service'
import { toastAlerta } from '../../../utils/toastAlert'
import mockCategory from '../../../utils/mockCategory'

function DeletarCategory() {
    const [category, setCategory] = useState<ICategory>({} as ICategory)

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario } = useContext(AuthContext)
    const token = usuario.token

  /*    async function buscarPorId(id: string) {
        try {
            await buscar(`/category/${id}`, setCategory, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }  */

const buscarPorId = (id: string) => {
    setCategory(mockCategory.find((category) => category.id == Number(id)) as ICategory)
}

/*     useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token]) */

    useEffect(() => {
        if (id !== undefined) {
            console.log(id)
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categories")
    }

     async function deletarCategory() {
        try {
            await deletar(`/category/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tema apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Tema', 'erro')
        }

        retornar()
    } 

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Category</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a Categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>{category.name}</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{category.description}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategory}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategory