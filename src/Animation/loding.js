import React from "react";
import { ShimmerThumbnail, ShimmerSectionHeader  } from "react-shimmer-effects";

function loading(){
    
    return(
        <><div className="continer-sm">
            <div className="m-3  p-3 rounded">
            <ShimmerThumbnail height={250} rounded />
            </div>
        
            
        <div className="m-4">
        <ShimmerSectionHeader />
        <ShimmerSectionHeader />
        </div>
        
        </div></>
                
    )
}

export default loading;