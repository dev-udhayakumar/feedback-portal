import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";
import Lode from "./components/Animation/loding";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Signup = () =>{
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [confirmpassword,setconfirmpassword] = useState('');
    const [firstname ,setfirstname] = useState('');
    const [lastname ,setlastname] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();
    function signin(){
        if(email.length===0 || password.length===0 || firstname.length===0){
            toast("Invalid Inputs")
        }else{
            if(password.length===confirmpassword.length){
                setLoading(true)
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    updateProfile(auth.currentUser, { displayName: firstname +" "+ lastname });
                    const user = userCredential.user;
                    console.log(user);
                    history.push("/Login");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast("Invalid email or password")
                    console.log(errorCode , errorMessage)
                }).finally(() => setLoading(false));;
            }else{
                toast("Password Mismatch")
            }
        }
        
    }
    function alreadyhaveaccounnt(){
        history.push("/Login")
    }

    return(
        <div >{loading ? <Lode></Lode> : <div>
            <div >
                <nav className="navbar navbar-dark bg-white">
                <h3 className="ms-3">Firebase</h3>
                    </nav>
                </div>
                <div className="d-flex justify-content-center ">
                <div className="card border-white  rounded" style={{width: "22rem"}}>
                <h2 className="card-title m-3">Create Your Account</h2>
                <div className="card-body">
                <div className="row">
                    <div className="col">
                    <div className="mb-3">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control" value={firstname} onInput={e => setfirstname(e.target.value)} placeholder="Udhayakumar"  />
                </div>
                    </div>
                    <div className="col">
                    <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" value={lastname} onInput={e => setlastname(e.target.value)} placeholder="T"  />
                </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="mail" className="form-control" value={email} onInput={e => setemail(e.target.value)} placeholder="dev.udhayakumar@gmail.com"  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onInput={e => setpassword(e.target.value)} placeholder="Password" />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Confirm Password</label>
                    <input type="password" className="form-control" value={confirmpassword} onInput={e => setconfirmpassword(e.target.value)} placeholder="Confirm Password" />
                </div>
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-outline-secondary"  onClick={alreadyhaveaccounnt}>Login instead</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-primary" type="button" onClick={signin}>{loading ? 'Loading..' : 'Signup'}</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div> 
            </div>
        }
        
            
        </div>
    )
}

export default Signup;
