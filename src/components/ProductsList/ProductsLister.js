import React from "react";
import '../ProductsList/ProductList.css'
const ProductLister =(props) =>{
     
    return (
        <React.Fragment>
            <div>
                 <h3>{props.Category}</h3>
                 <ul>
                    {props.items.map((item)=>{
                        return <li key={Math.random() * (99 - 10 + 1) + 1}> 
                                
                                <div className="item">
                                    <div>Id: {item.Id }</div>
                                    <div> Rs.   {item.SellingPrice}</div>
                                    <div> {item.ProductName}</div>
                                    <div>{item.Category}</div>

                                   
                               
                             
                              
                                
                                </div>
                              </li>
                    })}

                 </ul>
            </div>
        </React.Fragment>
    );
     
}

export default ProductLister;