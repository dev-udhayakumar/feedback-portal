import React from  'react';
import { useHistory } from "react-router-dom";

function AddReport(){
    const history = useHistory();
    function back(){
        history.push("/Home");
    }
    return(
        <div className="continer">
            <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <button class="btn btn-outline-secondary" onClick={back}>Back</button>
            <div class="d-flex">
            <button type="button" class="btn btn-primary">Submit</button>
            </div>
            
            </div>
            </nav>
            <div className="d-flex justify-content-center">
            <div className="m-4" style={{width: "22rem"}}>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Subject *</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="simple title"></input>
            </div>
            <div class="mb-3">
            <label for="formFile" class="form-label">Attach file</label>
            <input class="form-control" type="file" id="formFile"></input>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Compose *</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default AddReport;