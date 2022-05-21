import Table from "../components/Table/Table";
import Form from "../components/Form/Form";
import styled from "styled-components";
import {useState} from 'react'

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;

`


function App() {
  const [products, setProducts] = useState([
    {name: 'ASUS Zenbook', nameNoRegister: 'asus zenbook', price: 1200, stock: 4, id: 1},
    {name: 'Acer Predator', nameNoRegister: 'acer predator', price: 1500, stock: 2, id: 2},
    {name: 'HDD Seagate 2TB', nameNoRegister: 'hdd seagate 2tb', price: 200, stock: 30, id: 3}
  ])

  const [inputTitleValue, setInputTitleValue] = useState('')
  const [inputPriceValue, setInputPriceValue] = useState('')
  const [inputStockValue, setInputStockValue] = useState('')

  const createId = () => {
    return Date.now()
  } 

  const removeOneStockHandler = (id) => {
    const index = products.findIndex(p => p.id === id);
    const copyArr = [...products]
    const copyElement = copyArr[index]
    if (copyElement.stock > 0) {
      copyElement.stock--
      copyArr[index] = copyElement
      setProducts(copyArr)
    }
  }

  const changeInputTitle = (e) => {
    setInputTitleValue(e.target.value)
  }
  
  const changeInputPrice = (e) => {
    setInputPriceValue(e.target.value.replace(/[^+\d]/g, ''))
  }

  const changeInputStock = (e) => {
    setInputStockValue(e.target.value.replace(/[^+\d]/g, ''))
  }

  return (
    <Container>
      <Table
        products={products}
        removeOneStockHandler={removeOneStockHandler}
      />
      <Form
      inputTitleValue={inputTitleValue}
      inputPriceValue={inputPriceValue}
      inputStockValue={inputStockValue}
      changeInputTitle={(e)=>{changeInputTitle(e)}}
      changeInputPrice={(e)=>{changeInputPrice(e)}}
      changeInputStock={(e)=>{changeInputStock(e)}}
      />
    </Container>
  );
}

export default App;
