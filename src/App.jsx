import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";
import ProductList from "./Components/ProductList";
import ProductDetailes from "./Components/ProductDetailes";
import AddProduct from "./Components/AddProduct";
import Home from "./Components/Home";
import Forms from "./Components/Forms";
import AddtoCart from "./Components/AddtoCart";


function App() {
 
  return (
    <>
<BrowserRouter>
<Navbar/>

<Routes>
    <Route path="/" element={<Home/>}/>

  <Route path="/Products" element={<ProductList/>}/>
          <Route path="/laptops/:id" element={<ProductDetailes/>} />
                    <Route path="/Add-product" element={<Forms/>} />
                    <Route path="/edit/:id" element={<Forms/>}/>
                            <Route path="/cart" element={<AddtoCart/>} />



    




</Routes>



</BrowserRouter>
 
    </>
  )
}


export default App
