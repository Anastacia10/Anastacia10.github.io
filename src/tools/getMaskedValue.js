export const getMaskedValue = (value, prevValue) => {
  let result = value;
  if (value.length > prevValue.length) {
    const length = prevValue.length;
    switch (length) {
      case 0:
        result += "-";
        break;
      case 5:
        result += "-";
        break;
      case 8:
        result += "-";
        break;
      default:
        break;
    }
  }

  return result;
};
