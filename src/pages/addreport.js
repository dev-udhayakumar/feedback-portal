import React from  'react';
import { useState } from "react";
import { useHistory,Redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { addDoc, collection,Timestamp } from "firebase/firestore"; 
import firebaseConfig from "./Firebase.js";
import Lode from "../Animation/loding";

function AddReport(){
    const [subject , setsubject] = useState('');
    const [feedback ,setfeedback] = useState('');
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);
    const [ip, setip] =useState('');
    const [city ,setcity] =useState('');
    const [region,setregion] = useState('');
    var db= firebaseConfig.firestore();
    const auth = getAuth();
    const user = auth.currentUser;
    React.useEffect(() => {
        fetch('https://ipapi.co/json/')
          .then(results => results.json())
          .then(data => {
            setip(data.ip);
            setcity(data.city);
            setregion(data.region);
          });
      }, []);
    if(!user){
        return <Redirect to="/login" />
    }
    function back(){
        history.push("/Home");
    }
    async function add(){
        if(subject.length===0  || subject.length===0 ){
            console.log("invalid");
            alert("invalid");
        }else{
            if(!user.displayName){
                try {   
                    setLoading(true);
                    
                    const docRef = await addDoc(collection(db,"Anonymous"), {
                        report1:{
                            " 1. subject":  subject,
                            " 2. feedback": feedback,
                            " 3. date & time" : Timestamp.fromDate(new Date()),
                            " 4. ip address" : ip,
                            " 5. location" : city +"," +  region , 
                        }
                            
                    });
                    alert("Report Added  Your id : "+ docRef.id)
                    history.push("/Home");
                    console.log("Document written with ID: ", docRef.id);
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }setLoading(false);
            }else{
                try {   
                    setLoading(true);
                    
                    const docRef = await addDoc(collection(db,user.displayName), {
                        report1:{
                            " 1. subject":  subject,
                            " 2. feedback": feedback,
                            " 3. date & time" : Timestamp.fromDate(new Date()),
                            " 4. ip address" : ip,
                            " 5. location" : city +"," + region ,
                        }
                            
                    });
                    alert("Report Added ,  id : "+ docRef.id)
                    history.push("/Home");
                    console.log("Document written with ID: ", docRef.id);
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }setLoading(false);

            }
            
        }
        
          
    }
    return(
        <div>
            {loading ? <Lode></Lode> : <div className="continer">
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <button class="btn btn-outline-secondary" onClick={back}>Back</button>
            <div class="d-flex">
            <button type="button" class="btn btn-primary" onClick={add}>Submit</button>
            </div>
            
            </div>
            </nav>
            <div className="d-flex justify-content-center">
            <div className="m-4" style={{width: "22rem"}}>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label" >Subject *</label>
            <input type="email" class="form-control" id="subject" placeholder="Subject" value ={subject} onInput={e => setsubject(e.target.value)}></input>
            </div>
            {/* <div class="mb-3">
            <label for="formFile" class="form-label">Attach file</label>
            <input class="form-control" type="file" id="formFile"></input>
            </div> */}
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Compose *</label>
            <textarea class="form-control" id="feeedback" rows="10" value={feedback} onInput={e => setfeedback(e.target.value)}></textarea>
            </div>
            </div>
            </div>
            
            
        </div>}
        </div>
        
    )
}

export default AddReport;