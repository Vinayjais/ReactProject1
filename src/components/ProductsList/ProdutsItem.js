import React from "react";
import Button from "../UI/Button";

const Item =(props)=>{

    function itemDeleteHandler(){
           props.onDelete(props.Id);
    }
    return(
        <React.Fragment>
            <li > 
                                
                                <div className="item">
                                    <div>Id: {props.Id }</div>
                                    <div> Rs.   {props.SellingPrice}</div>
                                    <div> {props.ProductName}</div>
                                    <div>{props.Category}</div>
                                     <div><Button type={itemDeleteHandler} value="Delete"></Button></div>    
                                
                                </div>
                              </li>
        </React.Fragment>
    )
};

export default Item;