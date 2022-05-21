import styled from "styled-components";

const ModalDivClosed = styled.div`
  border: 1px solid black;
  background-color: rgb(204, 243, 243);
  border-radius: 9px;
  width: 450px;
  height: 180px;
  position: absolute;
  right: 0;
  text-align: center;
  opacity: 0;
  transition: all 0.1s;
`
const ModalText = styled.h1`
`

const ModalDivOpened = styled(ModalDivClosed)`
  opacity: 1;
  top: 40%; left: 50%;
	transform: translate(-50%,-50%);
`
const Button = styled.button`
  margin-right: 5px;
  font-size: 20px;
  padding: 5px;
`

const Modal = (props) => {
  if (props.modalOpen) {
    return (
      <ModalDivOpened>
        <ModalText>Do you want to edit an existing product?</ModalText>
        <Button onClick={props.yesModalHundler}>yes</Button>
        <Button onClick={props.noModalHundler}>no</Button>
      </ModalDivOpened>
    )
  } else {
    return (
      <ModalDivClosed>
        <ModalText>Do you want to edit an existing product?</ModalText>
        <Button onClick={props.yesModalHundler}>Yes</Button>
        <Button onClick={props.noModalHundler}>No</Button>
      </ModalDivClosed>
    )
  }
}

export default Modal