exports.spaceCardNumber = (str) => {
  return (
    str
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

// using Regular expression (RegExp)
exports.checkName = (name) => {
  const specialChar = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;

  const numChar = /[0-9]/;
  return specialChar.test(name) || numChar.test(name);
}; // true

exports.checkNumber = (number) => {
  const specialChar = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;

  const letterChar = /[A-Z]/;
  return letterChar.test(number) || specialChar.test(number);
}; //true

exports.checkData = (value, length, min, max) => {
  let newArr;
  const arr = [...value];
  if (arr.length >= length) {
    newArr = arr.slice(0, length).join('');
  }
  if (arr.length > 0 && arr.length < length) {
    return arr.join('');
  }
  if (max && +newArr > max) return max;
  if (min && +newArr < min) return min;
  else return newArr;
};
