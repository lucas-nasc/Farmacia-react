import './App.css'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavBar'
import ListaCategorias from './components/category/listCategory/ListCategory'
import DeletarCategory from './components/category/deleteCategory/DeleteCategory'
import FormularioCategory from './components/category/formCategory/FormCategory'

function App() {

  return (
    <>
     <ToastContainer />
     <Navbar />
     <div className='min-h-[80vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/categories' element={<ListaCategorias/>} />
        <Route path="/cadastroCategory" element={<FormularioCategory />} />
        <Route path="/editarCategory/:id" element={<FormularioCategory />} />
        <Route path="/deletarCategory/:id" element={<DeletarCategory />} />
      </Routes>
     </div>
     <Footer />
    </>
  )
}

export default App
