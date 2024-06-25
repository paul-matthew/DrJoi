import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const ProductContext = createContext([]);

export const useProducts = () => useContext(ProductContext);

// reduce waiting time
export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      // move to env
      const url = "https://drjoiserver-106ea7a60e39.herokuapp.com/products";
      const resp = await fetch(url);
      const data = await resp.json();
      setProducts(() => data.data);
    }
    getData();
  });
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
