import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StoreProvider } from "./store/index";
import './App.css';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";


function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/product/cart" component={Cart} />
          <Route path="/product/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
