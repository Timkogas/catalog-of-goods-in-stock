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

const Form = () => {
  return (
    <FormStyled>
      <InputPrice/>
      <InputStock/>
      <InputTitle/>
      <ButtonForm/>
    </FormStyled>
  )
}

export default Form