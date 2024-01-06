import React from "react";

const Button=(props)=>{
    return(
         <React.Fragment>
         
            <button onClick={props.type} >{props.value}</button>
     
         </React.Fragment>
    );
}

export default Button;