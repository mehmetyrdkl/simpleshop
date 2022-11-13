import { useState, useEffect } from "react";
import Basket from "./componenets/Basket";
import Header from "./componenets/Header";
import ProductList from "./componenets/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
      <Basket products={products} />
    </div>
  );
}

export default App;
