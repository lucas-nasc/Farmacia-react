import { BaseSyntheticEvent, ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import {
  buscarCategoria,
  cadastrarCategoria,
  atualizarCategoria,
} from "../../../services/Service";

export default function FormularioCategoria() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });
  const [loading, setLoading] = useState<boolean>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      setLoading(true);
      buscarPorId(+id);
    }
  }, [id]);

  useEffect(()=>{
    const categoria = categorias.find((x)=>x.id==+id);
    if (categoria) {
      setCategoria(categoria);
    }
  },[categorias]);

  function handleChangeDescricao(value: string) {
    setCategoria((categoria) => {
      return { descricao: value, id: categoria.id };
    });
  }

  async function buscarPorId() {
    setLoading(true);
    await buscarCategoria("/categorias", setCategorias, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNjk3NTUyMzk3LCJleHAiOjE2OTc1NTU5OTd9._iVx5ilMu5CIkWO5-91TVOT7JW6Rfu8oaloP_Mhj1DU",
      },
    });
    setLoading(false);
  }

  async function gravarCategoria(e: BaseSyntheticEvent) {
    e.preventDefault();

    if (id !== undefined) {
      await atualizar();
    } else {
      await cadastrar();
    }
  }

  async function atualizar() {
    await atualizarCategoria("/categorias", categoria, setCategorias, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNjk3NTUyMzk3LCJleHAiOjE2OTc1NTU5OTd9._iVx5ilMu5CIkWO5-91TVOT7JW6Rfu8oaloP_Mhj1DU",
      },
    });
    alert("Categoria Atualizada com Sucesso!");
    retornar();
  }

  async function cadastrar() {
    await cadastrarCategoria("/categorias", categoria, setCategorias, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNjk3NTUyMzk3LCJleHAiOjE2OTc1NTU5OTd9._iVx5ilMu5CIkWO5-91TVOT7JW6Rfu8oaloP_Mhj1DU",
      },
    });
    alert("Categoria Cadastrada com Sucesso!");
    retornar();
  }

  function retornar() {
    navigate("/categoria");
  }

  if (loading) {
    return <h1>Carregando....</h1>;
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastre uma nova categoria" : "Editar categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gravarCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeDescricao(e.target.value)
            }
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Editar"}
        </button>
      </form>
    </div>
  );
}
