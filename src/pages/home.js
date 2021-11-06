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
    function report(){
        history.push("/Report");
    }
    return(
        <><div>
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <button class="btn btn-outline-secondary" onClick={signout}>LogOut</button>
            <div class="d-flex">
            <button type="button" class="btn btn-white " disabled>Hello , {user.displayName}</button>
            </div>
            </div>
            </nav>
        </div><div>
                
                <div className="row">
                    <div className="col ">
                    <div className="d-flex justify-content-center m-3">
                    <div class="card" style={{width: "18rem"}}>
                        <i class="bi bi-file-earmark-plus" style={{fontSize: "4rem",textAlign:"center"}}></i>
                        <h5 class="card-title ms-3" style={{textAlign:"center"}}>Add Report</h5>
                        <div class="card-body">
                            <p class="card-text">Feel free to report about anything that bothered you , we will look into that.</p>
                            <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button" onClick={report}>Raise Report</button>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    <div className="col ">
                    <div className="d-flex justify-content-center m-3">
                    <div class="card" style={{width: "18rem"}}>
                    <i class="bi bi-clock-history" style={{fontSize: "4rem",textAlign:"center"}}></i>
                    <h5 class="card-title m-3" style={{textAlign:"center"}}>Your History</h5>
                        <div class="card-body">
                            <p class="card-text">Your history of previous reports , you can track them.</p>
                            <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Check History</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div></>
                
    )
}

export default Home;