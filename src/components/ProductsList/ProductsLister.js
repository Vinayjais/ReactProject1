import React from "react";
import '../ProductsList/ProductList.css'

import Item from "./ProdutsItem";
const ProductLister =(props) =>{
   
     function deleteHandler(itemId){
        props.onDelete(itemId);
     }
     
    return (
        <React.Fragment>
            <div>
                 <h3>{props.Category}</h3>
                 <ul>
                    
                 {props.items.map((item)=>{
                        return <Item 
                        key={Math.random() * (99 - 10 + 1) + 1}
                        Id={item.Id} 
                        SellingPrice={item.SellingPrice}
                         ProductName={item.ProductName} 
                         Category={item.Category}
                         onDelete={deleteHandler}
                         
                         >
                        

                         </Item>
                    })}
                 </ul>
            </div>
        </React.Fragment>
    );
     
}

export default ProductLister;