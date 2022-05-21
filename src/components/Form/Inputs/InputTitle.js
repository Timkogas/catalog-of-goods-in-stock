import styled from "styled-components";

const Input = styled.input`
  height: 25px;
  font-size: 20px;
`

const InputTitle = (props) => {
  return (
    <Input 
      type='text' 
      placeholder='Title' 
      name="title"
    />
  )
}

export default InputTitle