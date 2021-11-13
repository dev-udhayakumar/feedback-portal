import React from  'react';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore"; 
import firebaseConfig from "./Firebase.js";
import Lode from "../Animation/loding";


function AddReport(){
    const [subject , setsubject] = useState('');
    const [feedback ,setfeedback] = useState('');
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);
    var db= firebaseConfig.firestore();
    function back(){
        history.push("/Home");
    }
    async function add(){
        if(subject.length===0  || subject.length===0 ){
            alert("Invalid Input");
        }else{
            try {   
                setLoading(true);
                const docRef = await addDoc(collection(db, "Report"), {
                  subject:  subject,
                  feedback: feedback
                });
                alert("Report Added  Your id : "+ docRef.id)
                history.push("/Home");
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }setLoading(false);
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