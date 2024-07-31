export const formatCartItems = (cartItems) => {
  return cartItems
    .map((item) => {
      return `Proizvod: ${item.type}\nBoja: ${item.color}\nVeličina: ${
        item.size
      }\nKoličina: ${item.quantity}\nCena: ${(
        item.price * item.quantity
      ).toFixed(2)} RSD\n\n`;
    })
    .join("");
};

export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
