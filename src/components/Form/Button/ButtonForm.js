import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 5px;
  width: 250px;
  font-size: 20px;
`
const EmptyButtonStyled = styled.button`
  padding: 5px;
  opacity: 0.3;
  border: 1px solid rgb(59, 59, 59);
  background-color: rgb(239, 239, 239)
`

const ButtonForm = () => {
  return (
    <ButtonStyled>Create Product</ButtonStyled>
  )
}

export default ButtonForm