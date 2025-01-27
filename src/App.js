import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ShoppingContext from "./context/shopping/shoppingContext";
import { useContext, useEffect } from "react";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const promise = loadStripe(
  'pk_test_51QSekSJgTLpyxgelSkunCA5ad99f6lxOol1zUBluIhIryX6q7IiochvU5SBg2dm3PAgeBErXtLkqRJ1kFQkiQlPX00Zyvz1NB7'
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is  ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
