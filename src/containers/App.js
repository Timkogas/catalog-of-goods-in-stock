import Table from "../components/Table/Table";
import Form from "../components/Form/Form";
import styled from "styled-components";
import {useState} from 'react'
import Modal from "../components/Modal/Modal";

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
    const value = e.target.value.replace(/[^+\d]/g, '')
    setInputPriceValue(Number(value))
  }

  const changeInputStock = (e) => {
    const value = e.target.value.replace(/[^+\d]/g, '')
    setInputStockValue(Number(value))
  }

  const formBtnLogic = (e) => {
    e.preventDefault()
    if (inputTitleValue && (inputPriceValue || inputStockValue)) {
      const filtredArr = products.filter((product)=> {
        return product.nameNoRegister === inputTitleValue.toLowerCase()
      }) 
      const copyArr = [...products]
      if (filtredArr.length) {
        const index = products.findIndex(p => p.nameNoRegister === inputTitleValue.toLowerCase());
        const copyElement = copyArr[index]
        if (inputPriceValue) {
          copyElement.price = inputPriceValue
        }
        if (inputStockValue) {
          copyElement.stock = copyElement.stock + inputStockValue 
        }
        copyArr[index] = copyElement
        setProducts(copyArr)
      } else {
        const newProduct = {
          name: inputTitleValue,
          nameNoRegister: inputTitleValue.toLowerCase(),
          price: inputPriceValue ? inputPriceValue : 0,
          stock: inputStockValue ? inputStockValue : 0,
          id: createId()
        }
        copyArr.push(newProduct)
        setProducts(copyArr)
      }
    }
  }

  const sortNamesUp = () => {
    const copyArr = [...products]
    copyArr.sort((a, b) => a.name.localeCompare(b.name))
    setProducts(copyArr)
  }
  const sortPricesUp = () => {
    const copyArr = [...products]
    copyArr.sort((a, b) => {return b.price - a.price;});
    setProducts(copyArr)
  }
  const sortStocksUp = () => {
    const copyArr = [...products]
    copyArr.sort((a, b) => {return b.stock - a.stock;});
    setProducts(copyArr)
  }

  const sortNamesDown = () => {
    const copyArr = [...products]
    copyArr.sort((a, b) => a.name.localeCompare(b.name))
    setProducts(copyArr.reverse())
  }
  const sortPricesDown = () => {
    const copyArr = [...products]
    copyArr.sort((a, b) => {return a.price - b.price;});
    setProducts(copyArr)
  }
  const sortStocksDown = () => {
    const copyArr = [...products]
    copyArr.sort((a, b) => {return a.stock - b.stock;});
    setProducts(copyArr)
  }

  const yesModalHundler = () => {}
  const noModalHundler = () => {}

  return (
    <Container>
      <Table
        products={products}
        removeOneStockHandler={removeOneStockHandler}
        sortNamesUp={()=>{sortNamesUp()}}
        sortPricesUp={()=>{sortPricesUp()}}
        sortStocksUp={()=>{sortStocksUp()}}
        sortNamesDown={()=>{sortNamesDown()}}
        sortPricesDown={()=>{sortPricesDown()}}
        sortStocksDown={()=>{sortStocksDown()}}
      />
      <Form
      inputTitleValue={inputTitleValue}
      inputPriceValue={inputPriceValue}
      inputStockValue={inputStockValue}
      changeInputTitle={(e)=>{changeInputTitle(e)}}
      changeInputPrice={(e)=>{changeInputPrice(e)}}
      changeInputStock={(e)=>{changeInputStock(e)}}

      formBtnLogic={(e)=>{formBtnLogic(e)}}
      />
      <Modal
        yesModalHundler={()=>{yesModalHundler()}}
        noModalHundler={()=>{noModalHundler()}}
      />
    </Container>
  );
}

export default App;
