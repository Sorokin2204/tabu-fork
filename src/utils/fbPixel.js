import ReactPixel from 'react-facebook-pixel';
ReactPixel.init('1093774831263591');
export const fbqViewPage = () => {
  ReactPixel.pageView();
};
export const fbqAddtoCart = () => {
  ReactPixel.track('AddToCart');
};
export const fbqSubscripbe = () => {
  ReactPixel.track('SubmitApplication');
};
export const fbqCompleteRegister = () => {
  ReactPixel.track('CompleteRegistration');
};
export const fbqSellProduct = (cartTotal) => {
  ReactPixel.track('Purchase', { value: cartTotal, currency: 'USD' });
};
