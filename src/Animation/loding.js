import React from "react";
import LottieAnimation from './Lottifile';
import load from './lode.json';

function loading(){
    
    return(
        <><div className="continer">
        </div><div>
            <div className="position-absolute top-50 start-50 translate-middle">
            <LottieAnimation lotti={load} height={300} width={300} />
            <h5 style={{textAlign:"center"}}>Loding.....</h5>
            </div>
        
        </div></>
                
    )
}

export default loading;