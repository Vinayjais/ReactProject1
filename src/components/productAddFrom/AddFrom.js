import React,{useState} from "react";
import Inputform from "../FromInputs/Inputform";
import Button from "../UI/Button";
import SelectForm from "../FromInputs/SelectForm";
const AddForm =(props) =>{
  const [enteredValue,setEnterValue]= useState('');
  const [enteredId,setEnterId]= useState('');
  const [enteredPrice,setEnterPrice]= useState('');
  const [selectedCategory,setSelectedCategory]= useState('');

  
  function productNameHandler(event){
    setEnterValue(event.target.value);
  };
  function productIdHandler(event){
     setEnterId(event.target.value);
  };
  function productPriceHandler(event){
     setEnterPrice(event.target.value);
  };

  function selectedCategoryHandler(event){
     setSelectedCategory(event.target.value)
  }
   function submitHandler(event){
    event.preventDefault();
        
         const ProductDetailes ={
            Id:enteredId,
            SellingPrice: enteredPrice,
            ProductName: enteredValue,
            Category: selectedCategory

         }
    
      props.upData(ProductDetailes);
      setEnterValue('');
      setEnterId('');
      setEnterPrice('');
   }
 
    return(
           <React.Fragment>
            <form >
            <Inputform for='ProductId' label="Product Id :" type="number" value={enteredId} onChange={productIdHandler} ></Inputform>
            <Inputform for='sellingPrice' label="Selling Price:" type="number" value={enteredPrice} onChange={productPriceHandler} ></Inputform>

            <Inputform for='ProductName' label="Product Name :" type="text" value={enteredValue} onChange={productNameHandler} ></Inputform>
            <SelectForm for="Category" label="Category" name="Category" onChange={selectedCategoryHandler} ></SelectForm>
           <Button type={submitHandler} value="Add Product"></Button>
           </form>
           </React.Fragment>
    )
}


export default AddForm;