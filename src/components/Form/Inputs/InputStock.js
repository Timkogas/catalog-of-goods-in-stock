import styled from "styled-components";

const Input = styled.input`
  height: 25px;
  font-size: 20px;
`


const InputStock = (props) => {
  return (
    <Input 
      type='text' 
      placeholder='Stock' 
      name="stock"
    />
  )
}

export default InputStock