import { Button , Card ,Container ,Form,Navbar} from 'react-bootstrap';

function Login(){
    return(
        <><div>
            <Container fluid="true">
                <Navbar expand="lg" variant="light" bg="light">
                    <Container fluid="xxl">
                        <Navbar.Brand href="#">React-firebase</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div><Container>
                <div className="d-flex justify-content-center mt-5">
                    <Card  border="light" style={{ width: '22rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-4" style={{fontSize:"30px"}}>Welcome back!</Card.Title>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="d-grid gap-2 mt-3">
                            <Button variant="primary" >
                                Login
                            </Button>
                            </div>
                            <div className="d-grid gap-2 mt-3">
                            <Button variant="outline-primary" href="/Signup" >
                                Create a new Account
                            </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container></>
    )
}

export default Login;