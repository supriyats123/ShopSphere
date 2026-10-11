
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import "./App.css";

function StoreLayout() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function addToCart(product) {
    if (!product || product.id === undefined || product.id === null) {
      console.error("Cannot add product: product or product ID is missing.");
      return;
    }

    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productId, quantity) {
    if (quantity < 1) {
      setCartItems((previousItems) =>
        previousItems.filter((item) => item.id !== productId)
      );
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }

  function removeFromCart(productId) {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== productId)
    );
  }

  return (
    <>
      <Navbar
        cartCount={cartCount}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              searchTerm={searchTerm}
            />
          }
        />

        <Route
          path="/products/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <StoreLayout />
    </BrowserRouter>
  );
}
