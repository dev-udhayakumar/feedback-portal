import React from "react";
import { Button,Container,Navbar} from 'react-bootstrap';
import { getAuth, signOut } from "firebase/auth";
import { useHistory,Redirect } from "react-router-dom";

function Home(){
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user.displayName);
    if(!user){
        return <Redirect to="/login" />
    }
    function signout(){
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          history.push("/Login");
        }).catch((error) => {
          // An error happened.
          alert(error)
          console.log(error);
        });
    }
    return(
        <><div>
            <Container fluid="true">
                <Navbar expand="lg" variant="light" bg="light">
                    <Button className="m-1" variant="outline-primary" onClick={signout}>
                        Logout
                    </Button>
                </Navbar>
            </Container>
        </div><div>
            <center>
                <h1 ><h1>Hii</h1> <h1>{user.displayName}</h1>you are logged in successfully</h1>
                </center>
            </div></>
                
    )
}

export default Home;