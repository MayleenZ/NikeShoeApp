import { createContext, useState} from "react";
import { nikeData } from "./data/nikeData";
import './App.css';
import Footer from './components/Footer'
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import Checkout from "./pages/Checkout";

//1. creating the context
export const ProductContext = createContext(null)

function App() {
  const [data, setData] = useState(nikeData);
  // expecting data to change that is why we use a useState, expecing user's to add more products , remove or update
  const [cart, setCart] = useState([]);
  // define it in an array to define different items
  // useState is the data that will constantly change over time

  //2. Wrap the components inside context provider and pass the values 
  return (
    <div className = "App">
    <ProductContext.Provider value={{data, cart, setCart}}>
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path="/shoes" element = {<Shoes />} />
        <Route path = "/checkout" element = {<Checkout/>} />
      </Routes>
      
      {/* passing all the cart data to the shopping cart in the header*/}
      
      {/* //passing all the data to the product list  */}
      {/* setCart will update the array */}
      {/* we are passing properties which is the data we added  */}
      {/* from app to productlist to productListItem - this is called prop drilling, it gets annoying later  */}
      <Footer />
    </ProductContext.Provider>
    </div>
  );
}

export default App;
