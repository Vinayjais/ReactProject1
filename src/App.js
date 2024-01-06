import React,{useState} from 'react';
import AddForm from './components/productAddFrom/AddFrom'; 
import './App.css';
import ProductLister from './components/ProductsList/ProductsLister';

 let electronicsItems = [
  {
    Id:'1',
    SellingPrice:"67",
    ProductName:'abc',
    Category:"Electronics"
  }
 ];
 let foodItmes =[

 ];

 let SkinCareItems = [];

function App() {

    const [electronicsItemsList, setElectronicItems] = useState(electronicsItems);
    const [foodItemsList, setFoodItems] = useState(foodItmes);
    const [SkinCareItemsList, setSkinCareItems] = useState(SkinCareItems);

      

   function saveData(ProductDetailes){

   
           if(ProductDetailes.Category === "Electronics"){
               setElectronicItems((prevItems)=>{
                     return [ProductDetailes,...prevItems];
               });
          }
          if(ProductDetailes.Category === "Foods"){
             setFoodItems((prevItems)=>{
                  return [ProductDetailes,...prevItems];
            });
       }
       if(ProductDetailes.Category === "SkinCares"){
         setSkinCareItems((prevItems)=>{
              return [ProductDetailes,...prevItems];
        });
   }
       

   }
  return (
    <div className="App">
      <h3>WelCome</h3>
       <AddForm upData={saveData}></AddForm>
       <ProductLister  items={electronicsItemsList} Category="Electronic Items --" ></ProductLister>
       <ProductLister items={foodItemsList} Category="Food Items --" ></ProductLister>
       <ProductLister items={SkinCareItemsList} Category="SkinCare Items --" ></ProductLister>
     </div>
  );
}

export default App;
