const addToDb = (id, quantity) => {
  const storedCart = getStoredCart();
  if (id in storedCart) {
    storedCart[id] = storedCart[id] + parseInt(quantity);
  } else {
    storedCart[id] = parseInt(quantity);
  }
  updateDb(storedCart);
};

const getStoredCart = () => {
  const exists = localStorage.getItem("shopping_cart");
  return exists ? JSON.parse(exists) : {};
};
const updateDb = (cart) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const storedCart = getStoredCart();
  delete storedCart[id];
  updateDb(storedCart);
};

const clearCart = () => {
  localStorage.removeItem("shopping_cart");
};

export { addToDb, getStoredCart, removeFromDb, clearCart };
