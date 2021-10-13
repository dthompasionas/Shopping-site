import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />    
        <Route path="/" exact component={Home}>     
        </Route>
        <Route path="/cart" exact component={Cart}> 
        </Route>
    
    </BrowserRouter>
  );
}

export default App;
