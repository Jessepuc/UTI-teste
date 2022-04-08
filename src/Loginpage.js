import { Nav } from './components';
import { Form, Container, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Loginpage ()  {
  return (
    <div className="">
    <div className="App">
      <Nav /> 
    </div> 
      <div className="container ">
          <div className="row align-items-center">
            <div className="col-6 mx-auto">
              <div className=" container p-3 my-3  border">   
                  <Container>
                    <h1 className='mb-3'> Login </h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                    <Form.Text className="text-muted d-flex justify-content-center ">
                                        Não tem uma conta? <a href="/welcome">Registre-se.</a>
                                    </Form.Text>
                                </Form.Group>
                                  <div className="d-flex justify-content-center">
                                    <Button  variant="primary" type="submit">
                                        Submit
                                    </Button>
                                  </div>
                            </Form>
                  </Container>
                </div>
            </div>
          </div>
        </div>
      </div>   
  );   
}

export default Loginpage;