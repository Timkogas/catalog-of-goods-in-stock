import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`
const ProductInfo = styled.p`
  font-size: 20px;
  font-weight: bolder;
  width: 340px;
  text-align: center;
`

const Button = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  margin-left: 20px;
  height: 20px;
`
const Product = (props) => {
  const ProductBtnLogic = () => {
    if (props.stock === 0) {
      return (<>Not Available</>)
    } else {
      return (
        <>
          {props.stock}
          <Button onClick={props.removeOneStockHandler}>&mdash;</Button>
        </>
      )
    }
  }

  return (
    <Wrapper>
      <ProductInfo>{props.name}</ProductInfo>
      <ProductInfo>{props.price}</ProductInfo>
      <ProductInfo>{ProductBtnLogic()}</ProductInfo>
    </Wrapper>
  )
}

export default Product