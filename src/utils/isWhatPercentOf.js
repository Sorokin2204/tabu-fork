export const isWhatPercentOf = (numA, numB) => {
  return 100 - Math.floor((numA / numB) * 100);
};
