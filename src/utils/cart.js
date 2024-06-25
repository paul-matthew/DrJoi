const KEY = "selectedSKUs";

function addToStorage(carts) {
  const nonEmptyProduct = carts.filter((el) => el.qty > 0);
  localStorage.setItem(KEY, JSON.stringify(nonEmptyProduct));
}

function getCartItems() {
  const current = localStorage.getItem(KEY);
  return JSON.parse(current) ?? [];
}

function addToCart(product) {
  const cartItems = getCartItems();
  const curr = cartItems.find((el) => el.id === product.id);
  if (!curr) {
    cartItems.push(product);
  } else {
    const idx = cartItems.indexOf(curr);
    cartItems[idx] = product;
  }
  addToStorage(cartItems);
}

function reduce(id) {
  const cartItem = getCartItems();
  const currItem = cartItem.find((el) => el.id === id);
  const idx = cartItem.indexOf(currItem);
  if (!currItem) return;
  const currQty = parseInt(currItem.qty);
  const newQty = currQty - 1;
  currItem.qty = newQty;
  cartItem[idx] = currItem;
  addToCart(currItem);
}

function add(product) {
  const cartItem = getCartItems();
  let currItem = cartItem.find((el) => el.id === product.id);
  if (!currItem) {
    currItem = {
      id: product.id,
      qty: 1,
    };
  } else {
    const currQty = parseInt(currItem.qty);
    currItem.qty = currQty + product.qty;
  }
  addToCart(currItem);
}

function remove(id) {
  const cartItem = getCartItems();
  const cleanedCart = cartItem.filter((el) => el.id !== String(id));
  addToStorage(cleanedCart);
}

function clear() {
  addToCart([]);
}

function getTotal() {
  const cartItem = getCartItems();
  let total = 0;
  cartItem.forEach((item) => {
    total += parseInt(item.qty);
  });
  return total;
}

export const cartUtilities = {
  add,
  reduce,
  remove,
  clear,
  getTotal,
};
