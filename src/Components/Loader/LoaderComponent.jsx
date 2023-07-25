import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () =>{
    return(
        <>
          <BeatLoader
          color="hsla(209, 67%, 53%, 1)"
          cssOverride={{textAlign:"center",marginTop:"20%"}}
        />
        </>
    )
}

export default Loader;