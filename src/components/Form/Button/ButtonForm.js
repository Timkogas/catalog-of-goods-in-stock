import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 5px;
  width: 250px;
  font-size: 20px;
`
const EmptyButtonStyled = styled.button`
  padding: 5px;
  width: 250px;
  font-size: 20px;
  opacity: 0.3;
  border: 1px solid rgb(59, 59, 59);
  background-color: rgb(239, 239, 239)
`

const ButtonForm = (props) => { 
    if (props.inputTitleValue && (props.inputPriceValue || props.inputStockValue)) {
      return <ButtonStyled>Create Product</ButtonStyled>
    } else {
      return <EmptyButtonStyled>Create Product</EmptyButtonStyled>
    }
}

export default ButtonForm