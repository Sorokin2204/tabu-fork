export const removeFromCart = (productId) => {
  let currentCart = JSON.parse(localStorage.getItem('cart'));
  currentCart = currentCart ? currentCart : [];
  const findProduct = currentCart.findIndex((item) => item.id === productId);
  if (findProduct !== -1) {
    currentCart = currentCart.filter((item) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }
};
