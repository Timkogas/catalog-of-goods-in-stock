import Product from "./Product/Product"
import styled from "styled-components";

const TableStyled = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  height: 600px;
  margin-top: 30px;
  overflow-y: scroll;
`
const TableTitle = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
`
const TableNameWrapper = styled.div`
  border-right: 1px solid black;
  width: 350px;
  text-align: center;
  &:last-child {
    border-right: none;
  }
`
const TableName = styled.h1`
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
`
const NoProduct = styled.h2`
  text-align: center;
`

const Table = (props) => {

  const ProductsLogic = () => {
    if (props.products.length > 0) {
      return (
      <>
        {props.products.map((product)=>{
          return (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              removeOneStockHandler={()=>{props.removeOneStockHandler(product.id)}}
            />
          )
        })}
      </>
      )
    } else { 
      return <NoProduct>No Product Available</NoProduct>
    }
  }

  return (
    <TableStyled>
      <TableTitle>
        <TableNameWrapper>
          <TableName onClick={props.sortNames}>Title</TableName>
        </TableNameWrapper>

        <TableNameWrapper>
          <TableName onClick={props.sortPrices}>Price $</TableName>
        </TableNameWrapper>

        <TableNameWrapper>
          <TableName onClick={props.sortStocks}>Stock</TableName>
        </TableNameWrapper>

      </TableTitle>

      <ProductsLogic/>

    </TableStyled>
  )
}

export default Table