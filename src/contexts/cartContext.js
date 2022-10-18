import React, { createContext } from "react";
import { useState } from "react";
const cartContext = createContext({
    items: {},
    addItem: () => {},
    removeItem: () => {},
});

const CartProvider = ({children}) => {
     // Products will be a nested map {item_id: {itemDetails, quantity}}
   const [products, setProducts] = useState({});
   const addItem = (productID, product) => {
     if (products.hasOwnProperty(productID)) {
        setProducts(...(products[productID].count++))
     } else {
        setProducts({...products, productID: {details: product, count: 1}})
     }
   }
 
   const removeItem = (productID) => {
    setProducts(...(delete products[productID]))
   }

  return (
    <cartContext.Provider value={{products, addItem, removeItem }}>
      {children}
    </cartContext.Provider>
  );
};

const withCart = (Child) => (props) => (
    <cartContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </cartContext.Consumer>
);

export { CartProvider, withCart };