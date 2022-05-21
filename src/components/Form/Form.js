import InputPrice from "./Inputs/InputPrice"
import InputStock from "./Inputs/InputStock"
import InputTitle from "./Inputs/InputTitle"
import ButtonForm from "./Button/ButtonForm"
import styled from "styled-components";

const FormStyled = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Form = (props) => {
  return (
    <FormStyled>
      <InputTitle
        inputTitleValue={props.inputTitleValue}
        changeInputTitle={props.changeInputTitle}
      />

      <InputPrice
        inputPriceValue={props.inputPriceValue}
        changeInputPrice={props.changeInputPrice}
      />
      <InputStock
        inputStockValue={props.inputStockValue}
        changeInputStock={props.changeInputStock}
      />
      <ButtonForm/>
    </FormStyled>
  )
}

export default Form