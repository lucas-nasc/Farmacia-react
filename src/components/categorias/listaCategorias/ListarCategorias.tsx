import { useEffect, useState } from "react";
import { categorias as categoriaDb } from "../../../database/categoriaDb";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardCategoria/CardCategoria";
import { buscarCategoria } from "../../../services/Service";

export default function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>(categoriaDb);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    //utilizado dados em memoria, pois não temos API desenvolvida para consumir os dados
    //aqui seria utilizado o fetch, para simular a requisição, foi adicionado o
    //setTimeout

    // setTimeout(() => {
    //   setCategorias(categoriaDb);
    //   setLoading(false);
    // }, 1000);

    setLoading(true);
    await buscarCategoria("/categorias",setCategorias, {headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNjk3NTUyMzk3LCJleHAiOjE2OTc1NTU5OTd9._iVx5ilMu5CIkWO5-91TVOT7JW6Rfu8oaloP_Mhj1DU"}});
    setLoading(false);
  }

  if (loading) {
    return <h1>Carregando....</h1>;
  }

  if (categorias.length === 0) {
    return <h1>Nenhuma Categoria Cadastrada!</h1>;
  }

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
