import React from "react";
import { Button,Container,Navbar} from 'react-bootstrap';

function Home(){
    return(
        <><div>
            <Container fluid="true">
                <Navbar expand="lg" variant="light" bg="light">
                    <Button className="m-1" variant="outline-primary" href="/">
                        Logout
                    </Button>
                </Navbar>
            </Container>
        </div><div>
            <center>
                <h1 >Hello! Udhayakumar</h1>
                <h2>vanakkam</h2>
                </center>
            </div></>
                
    )
}

export default Home;