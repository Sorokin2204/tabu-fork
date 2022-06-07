export const convertToMaskPhone = (phone) => {
  const phoneStr = phone.toString();
  return `${phoneStr[0]}${phoneStr[1]} (${phoneStr[2]}${phoneStr[3]}${phoneStr[4]}) ${phoneStr[5]}${phoneStr[6]}${phoneStr[7]}-${phoneStr[8]}${phoneStr[9]}-${phoneStr[10]}${phoneStr[11]}`;
};
