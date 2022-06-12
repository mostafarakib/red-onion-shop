import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
import useFoods from "./useFoods";

const useCart = function (products) {
  const [foods] = useFoods();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (foods.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const id in savedCart) {
        const addedProduct = foods.find(
          (product) => parseInt(product.id) === parseInt(id)
        );
        if (addedProduct) {
          const quantity = savedCart[id];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [foods]);
  return [cart, setCart];
};

export default useCart;
