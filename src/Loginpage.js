import { Nav } from './components';
import { Form, Container, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Loginpage ()  {
  return (
    <div className="mother">
    <div className="App">
      <Nav /> 
    </div>
      <div className="container p-3 my-3  border">
        <h1> Login </h1>
        <Container >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        <Form.Text className="text-muted">
                            NÃ£o tem uma conta? <a href="#home">Registre-se.</a>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </Container>
      </div>
    </div>
  );   
}

export default Loginpage;