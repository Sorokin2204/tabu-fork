export const addToCart = (productId, sizeId) => {
  let currentCart = JSON.parse(localStorage.getItem('cart'));
  currentCart = currentCart ? currentCart : [];
  const findProduct = currentCart.findIndex((item) => item.id === productId);
  if (findProduct == -1) {
    currentCart.push({ id: productId, size: sizeId });
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }
};
