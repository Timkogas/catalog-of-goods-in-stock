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

  const createId = () => {
    return Date.now()
  } 


  return (
    <Container>
      <Table
        products={products}
      />
      <Form></Form>
    </Container>
  );
}

export default App;
