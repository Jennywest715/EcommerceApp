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
   const addItem = (productID, product, count) => {
     if (products.hasOwnProperty(productID)) {
        products[productID].count+=count
        setProducts({...products})
     } else {
        let newProduct = {}
        newProduct[productID] = {details: product, count: count};
        setProducts({...products, ...newProduct})
     }
   }
 
   const removeItem = (productID) => {
    delete products[productID]
    setProducts({...products})
   }

  return (
    <cartContext.Provider value={{items: products, addItem: addItem, removeItem: removeItem }}>
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