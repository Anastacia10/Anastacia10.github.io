export const getMaskedValue = (value, prevValue) => {
  let result = value;
  if (value.length > prevValue.length) {
    const length = value.length;
    switch (length) {
      case 1:
        result += "-";
        break;
      case 6:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
  }

  return result;
};
