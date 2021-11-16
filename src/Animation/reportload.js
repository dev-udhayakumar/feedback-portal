import React from "react";
import { ShimmerThumbnail, ShimmerSectionHeader  } from "react-shimmer-effects";

function reportload(){
    
    return(
        <><div className="continer-sm">
            <div className=" p-3 rounded" style={{width: "22rem"}}>
            <ShimmerThumbnail height={200} rounded />
            <div className="m-4">
            <ShimmerSectionHeader />
            </div>
            </div>
        
            
        
        
        </div></>
                
    )
}

export default reportload;