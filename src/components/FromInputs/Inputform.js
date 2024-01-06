import React from "react";

const input = (porps) =>{

    return (
          <React.Fragment>
            <label htmlFor={porps.for}>{porps.label}</label>
            <input type={porps.type} value={porps.value} onChange={porps.onChange} required ></input>
          </React.Fragment>
    );
}

export default input;