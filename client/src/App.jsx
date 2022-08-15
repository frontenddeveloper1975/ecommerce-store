import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = false;

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />}>
          <Route path="/products/:categories" element={<ProductList />} />
        </Route>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route 
          path="/register" 
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;