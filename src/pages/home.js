import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory,Redirect } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddReport from "./addreport";

toast.configure()

function Home(){
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    if(!user){
        return <Redirect to="/login" />
    }
    function signout(){
        const auth = getAuth();
        signOut(auth).then(() => {
          history.push("/Login");
          toast("Logged out Successfully")
        }).catch((error) => {
          // An error happened.
          toast(error)
          console.log(error);
        });
    }
    return(
        <><div className="continer">
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <button className="btn btn-outline-secondary" onClick={signout}>Logout</button>
            <div className="d-flex">
            <button type="button" className="btn btn-white " disabled>Hello {user.displayName}</button>
            </div>
            </div>
            </nav>
        </div><div>
                
                <div className="row">
                    <div className="col ">
                    <div className="d-flex justify-content-center ">
                    <div className="card mt-2 border-light"  >
                        <div className="card-body">
                            <AddReport></AddReport>
                            
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    {/* <div className="col ">
                    <div className="d-flex justify-content-center m-3">
                    <div className="card border-light" style={{width: "22rem"}}>
                    <i className="bi bi-clock-history" style={{fontSize: "4rem",textAlign:"center"}}></i>
                    <h5 className="card-title m-3" style={{textAlign:"center"}}>Your History</h5>
                        <div className="card-body">
                            <p className="card-text">Your history of previous reports , you can track them.</p>
                            <div className="d-grid gap-2">
                            <button className="btn btn-outline-primary" type="button">Check History</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div> */}
                </div>
            </div></>
                
    )
}

export default Home;