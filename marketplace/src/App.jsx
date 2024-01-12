import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Template from './pages/logged/template'
import { UserContext } from './context/auth'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Certifique-se de importar BrowserRouter
import products from "./datas/products.json";

import sapato from "./assets/sapato.jpg"

import { getProducts, insertProduct } from './functions/api.mjs'
import MyProducts from './components/myProducts'

const MeuComponent = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts(); // Chama a função getProducts
        setList(products.data) // Faz algo com os dados recebidos, como exibir no console
      } catch (error) {
        // Lida com o erro, pode mostrar uma mensagem de erro ao usuário, por exemplo
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchData(); // Chama a função fetchData que contém a chamada de getProducts
  }, []); // Este useEffect será executado apenas uma vez, equivalente ao componentDidMount no ciclo de vida do componente

  const List = () => {
    return (
      <>
        <ul className='listProducts'>
          {list.map((element) => (
            <li className='itemlist' key={element.id}>
              <h2 className='productTittle'>

                {element.nome}
              </h2>
              <img className='imgProduct' src={'https://d17afo29wyla0w.cloudfront.net/Custom/Content/Products/67/07/6707_calca-jeans-fem-reta-100-cargo-pr-16559-271232-_z1_638132073378251424.jpg'} alt={`imagem${element.nome}`}></img>
            </li>
          ))}

        </ul>
      </>
    )
  }
  return (
    <>
      <List />
    </>
  )
}

const Form = () => {
  const [formInput, setFormInput] = useState({
    nome: '',
    descricao: '',
    preco: '',
    quantidade_estoque: '',
    categoria_id: '',
    vendedor_id: ''
  })

  function handleSubmit() {
    insertProduct(formInput)
  }

  return (
    <div className='container'>
      <form className='formInsertProducts'>
        <label className='labelInsertProducts' htmlFor="">
          NOME DO PRODUTO:
          <br />
          <input type="text" placeholder='NOME' value={formInput.nome} onChange={e => {
            setFormInput({ ...formInput, nome: e.target.value })
          }} required />
        </label>
        <br />
        <label className='labelInsertProducts' htmlFor="">
          DESCRIÇÃO:
          <br />
          <input className='descricaoInput' type="text" placeholder='DESCRIÇÃO' value={formInput.descricao} onChange={e => {
            setFormInput({ ...formInput, descricao: e.target.value })
          }} required />

        </label>
        <br />
        <label className='labelInsertProducts' htmlFor="">
          PREÇO:
          <br />
          <input type="text" placeholder='PRECO' value={formInput.preco} onChange={e => {
            setFormInput({ ...formInput, preco: e.target.value })
          }} required />
        </label>
        <br />
        <label className='labelInsertProducts' htmlFor="">
          QUANTIDADE:
          <br />
          <input type="number" placeholder='QUANTIDADE' value={formInput.quantidade_estoque} onChange={e => {
            setFormInput({ ...formInput, quantidade_estoque: e.target.value })
          }} required />
        </label>
        <br />
        <label className='labelInsertProducts' htmlFor="">
          CATEGORIA:
          <br />
          <input type="number" placeholder='CATEGORIA' value={formInput.categoria_id} onChange={e => {
            setFormInput({ ...formInput, categoria_id: e.target.value })
          }} required />
        </label>
        <br />
        <label className='labelInsertProducts' htmlFor="">
          ID VENDEDOR:
          <br />
          <input type="number" placeholder='ID VENDEDOR' value={formInput.vendedor_id} onChange={e => {
            setFormInput({ ...formInput, vendedor_id: e.target.value })
          }} required />
        </label>
        <br />

        <button type='submit' onClick={handleSubmit}>SUBMETER</button>
      </form>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContext.Provider value={{ nome: "Vinicius" }} >
        <Router> {/* Utilize o Router para encapsular suas rotas */}
          <Routes>
            <Route path='/' element={<Template className='templatePage' />} > {/* Defina a rota para MeuComponent */}
              <Route path='feed' element={<MeuComponent />} />
              <Route path='/inserir-novo-produto' element={<Form />} />
              <Route path='/my-products' element={<MyProducts />} />
            </Route>

          </Routes>
        </Router>
      </UserContext.Provider >
    </>
  )
}

export default App
