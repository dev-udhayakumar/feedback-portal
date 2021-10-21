import React from "react";
import LottieAnimation from './Lottifile';
import load from './loading.json';

function loading(){
    
    return(
        <><div>
        </div><div>
        <LottieAnimation lotti={load} height={300} width={300} />
        </div></>
                
    )
}

export default loading;