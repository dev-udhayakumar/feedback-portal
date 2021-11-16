import React from  'react';
import { useState } from "react";
import { useHistory,Redirect } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore"; 
import firebaseConfig from "./Firebase.js";
import Lode from "../Animation/reportload";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function AddReport(){
    const [from , setfrom] = useState('');
    const [feedback ,setfeedback] = useState('');
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);
    const [isp, setisp] =useState('');
    const [city ,setcity] =useState('');
    const [region,setregion] = useState('');
    var db= firebaseConfig.firestore();
    const auth = getAuth();
    const user = auth.currentUser;
    const today = new Date();
    const time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    const timedate = ''+today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear()+"@"+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    React.useEffect(() => {
        fetch('https://ipapi.co/json/')
          .then(results => results.json())
          .then(data => {
            setisp(data.org);
            setcity(data.city);
            setregion(data.region);
          });
      }, []);
    if(!user){
        return <Redirect to="/login" />
    }
    async function add(){
        if(from.length===0  || feedback.length===0 ){
            console.log("invalid");
            toast("Invalid Inputs");
            
        }else{
            if(!user.displayName){
                try {   
                    setLoading(true);
                    
                    const docRef = await setDoc(doc(db, "Anonymous", ''+timedate), {
                        report:{
                            " 1. from":  from,
                            " 2. feedback": feedback,
                            " 3. time" : time,
                            " 4. location" : city +" , " +  region , 
                            " 5. ISP": isp,
                        }
                            
                    });
                    toast("Feedback Added  Successfully")
                    history.push("/Home");
                    console.log("Document written with ID: ", docRef);
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }setLoading(false);
            }else{
                try {   
                    setLoading(true);
                    
                    const docRef = await setDoc(doc(db, user.displayName, timedate ), {
                        report1:{
                            " 1. from":  from,
                            " 2. feedback": feedback,
                            " 3. time" : time,
                            " 4. location" : city +" , " + region ,
                            " 5. ISP": isp,
                        }
                            
                    });
                    toast("Feedback Added  Successfully")
                    history.push("/Home");
                    console.log("Document written with ID: ", docRef);
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }setLoading(false);

            }
            
        }
        
          
    }
    return(
        <div>
            {loading ? <Lode></Lode> : <div className="continer">
            <div className="d-flex justify-content-center">
            <div className="m-1" style={{width: "22rem"}}>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label" >From *</label>
            <input type="name" className="form-control" id="subject" placeholder="Subject" value ={from} onInput={e => setfrom(e.target.value)}></input>
            </div>
            {/* <div class="mb-3">
            <label for="formFile" class="form-label">Attach file</label>
            <input class="form-control" type="file" id="formFile"></input>
            </div> */}
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Feedback *</label>
            <textarea className="form-control" id="feeedback" rows="10" value={feedback} onInput={e => setfeedback(e.target.value)}></textarea>
            </div>
            <div className="pt-3">
            <div className="d-grid gap-2 ">
            <button type="button" className="btn btn-primary" onClick={add}>Submit</button>
            </div>
            </div>
            
            
            </div>
            </div>
            
            
        </div>}
        </div>
        
    )
}

export default AddReport;