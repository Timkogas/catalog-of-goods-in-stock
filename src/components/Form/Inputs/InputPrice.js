import styled from "styled-components";

const Input = styled.input`
  height: 25px;
  font-size: 20px;
`

const InputPrice = (props) => {
  return (
    <Input 
      type='text' 
      placeholder='Price' 
      name="price"
    />
  )
}

export default InputPrice