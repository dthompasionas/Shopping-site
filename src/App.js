import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path="/" exact component={Home}>
          <Home />
        </Route>
        <Route path="/cart" exact component={Cart}>
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
