import Table from "../components/Table/Table";
import Form from "../components/Form/Form";
import styled from "styled-components";

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;

`


function App() {
  return (
    <Container>
      <Table></Table>
      <Form></Form>
    </Container>
  );
}

export default App;
