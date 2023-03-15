const isFirstCharBig = (value) => {
  if (value.length === 0) {
    return false;
  } else {
    return value[0] === value[0].toUpperCase() ? true : false;
  }
};

const isValidPhoneNumber = (value) => {
  return /^[0-9]-[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value);
};

const isValidDateOfBirth = (value) => {
  return value === "" ? false : true;
};

const isValidSite = (value) => {
  return /^https:\/\//gm.test(value);
};

const isValidTextarea = (value) => {
  return value.length <= 600 && value.length !== 0 ? true : false;
};

export const isValid = (nameField, value) => {
  let result = true;
  switch (nameField) {
    case "name" || "surname":
      result = isFirstCharBig(value);
      break;
    case "surname":
      result = isFirstCharBig(value);
      break;
    case "dateOfBirth":
      result = isValidDateOfBirth(value);
      break;
    case "phone":
      result = isValidPhoneNumber(value);
      break;
    case "site":
      result = isValidSite(value);
      break;
    case "description":
      result = isValidTextarea(value);
      break;
    case "techStack":
      result = isValidTextarea(value);
      break;
    case "lastProjectDescription":
      result = isValidTextarea(value);
      break;
    default:
      break;
  }
  return result;
};

export const getNewInvalidList = (list, name, operator) => {
  const isNameInList = list.includes(name);
  if (operator === "add") {
    return isNameInList ? [...list] : [...list, name];
  } else if (operator === "del") {
    return isNameInList ? list.filter((item) => item !== name) : [...list];
  }
};

export const isAllFieldsWasFilled = (state) => {
  return Object.values(state).every((value) => value.length > 0);
};

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
