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
  &:last-child {
    border-right: none;
  }
`
const TableName = styled.h1`
  font-size: 20px;
  width: 350px;
  text-align: center;
`

const Table = () => {
  return (
    <TableStyled>
      <TableTitle>
        <TableNameWrapper>
          <TableName>Title</TableName>
        </TableNameWrapper>

        <TableNameWrapper>
          <TableName>Price</TableName>
        </TableNameWrapper>

        <TableNameWrapper>
          <TableName>Stock</TableName>
        </TableNameWrapper>

      </TableTitle>


      <Product></Product>
      <Product></Product>
      <Product></Product>

    </TableStyled>
  )
}

export default Table