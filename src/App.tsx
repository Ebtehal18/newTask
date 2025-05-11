import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
<Container fluid>
<Row>
    {[...Array(6)].map((_, index) => (
      <Col xs={12} lg={6} key={index}>
        <Card />
      </Col>
    ))}
</Row>
</Container>
    </>
  )
}

export default App
