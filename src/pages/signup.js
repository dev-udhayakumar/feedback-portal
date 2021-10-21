import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Signup = () =>{
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [name ,setname] = useState('');
    const [number,setnumber] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();
    function signin(){
        setLoading(true)
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            updateProfile(auth.currentUser, { displayName: name });
            console.log(number);
            updateProfile(auth.currentUser, { phoneNumber : number });
            const user = userCredential.user;
            console.log(user);
            history.push("/Login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Invalid email or password")
            console.log(errorCode , errorMessage)
        }).finally(() => setLoading(false));;
    }
    function alreadyhaveaccounnt(){
        history.push("/Login")
    }

    return(
        <div >
            <div >
            <nav className="navbar navbar-dark bg-primary">
            <h3 className="ms-3">Firebase</h3>
                </nav>
            </div>
            <div className="d-flex justify-content-center mt-4">
            <div className="card shadow border-light rounded" style={{width: "22rem"}}>
            <h2 className="card-title m-3">Create Account</h2>
            <div className="card-body">
            <div className="mb-3">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" value={name} onInput={e => setname(e.target.value)} placeholder="Enter Fullname"  />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone number</label>
                <input type="number" className="form-control" value={number} onInput={e => setnumber(e.target.value)} placeholder="Enter phonenumber"  />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" value={email} onInput={e => setemail(e.target.value)} placeholder="Enter email"  />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onInput={e => setpassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary" type="button" onClick={signin}>{loading ? 'Loading..' : 'Signup'}</button>
            <button className="btn btn-outline-primary"  onClick={alreadyhaveaccounnt}>Already Have an Account</button>
            </div>
            </div>
            </div>
            </div> 
        </div>
    )
}

export default Signup;
