import React from "react";

const Select = (porps) =>{

    return (
          <React.Fragment>
            <label htmlFor={porps.for}>{porps.label}</label>
            <select name={porps.name} onChange={porps.onChange} required >
                <option value='Electronics'>Electronics</option>
                <option value='Foods'>Foods</option>
                <option value='SkinCares'>SkinCares</option>
            </select>
          </React.Fragment>
    );
}

export default Select;