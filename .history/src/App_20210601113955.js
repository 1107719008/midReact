import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StoreProvider } from "./store/index";
import './App.css';
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/product/cart" component={Cart} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
