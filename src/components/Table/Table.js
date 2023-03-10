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
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    border-right: none;
  }
`
const TableName = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
const NoProduct = styled.h2`
  text-align: center;
`
const ButtonsTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
`
const BtnSort = styled.button`
  background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  width: 20px;
  height: 22px;
`

const Table = (props) => {

  const ProductsLogic = () => {
    const arr = props.products.filter((product)=>{
      if(product.stock>0) {
        return product
      }
    })

    if (props.products.length > 0 && arr.length) {
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
          <TableName>
            Title
            <ButtonsTitleWrapper>	
              <BtnSort onClick={props.sortNamesUp}>&#9650;</BtnSort>
              <BtnSort onClick={props.sortNamesDown}>&#9660;</BtnSort>
            </ButtonsTitleWrapper>
            </TableName>
        </TableNameWrapper>

        <TableNameWrapper>
          <TableName>
            Price $
            <ButtonsTitleWrapper>	
              <BtnSort onClick={props.sortPricesUp}>&#9650;</BtnSort>
              <BtnSort onClick={props.sortPricesDown}>&#9660;</BtnSort>
            </ButtonsTitleWrapper>
          </TableName>
        </TableNameWrapper>

        <TableNameWrapper>
          <TableName>
            Stock
            <ButtonsTitleWrapper>	
              <BtnSort onClick={props.sortStocksUp}>&#9650;</BtnSort>
              <BtnSort onClick={props.sortStocksDown}>&#9660;</BtnSort>
            </ButtonsTitleWrapper>
            </TableName>
        </TableNameWrapper>

      </TableTitle>

      <ProductsLogic/>

    </TableStyled>
  )
}

export default Table