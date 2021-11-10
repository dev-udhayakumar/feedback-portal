import React from "react";
import LottieAnimation from './Lottifile';
import load from './loading.json';

function loading(){
    
    return(
        <><div className="continer">
        </div><div>
            <div className="position-absolute top-50 start-50 translate-middle">
            <LottieAnimation lotti={load} height={100} width={100} />
            </div>
        
        </div></>
                
    )
}

export default loading;