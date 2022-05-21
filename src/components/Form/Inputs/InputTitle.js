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
      value={props.inputTitleValue}
      onChange={props.changeInputTitle}
    />
  )
}

export default InputTitle