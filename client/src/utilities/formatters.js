export const extractInitials = (str) => {
  const strArr = str.split(' ');
  const initialsArr = strArr.map(name => name[0]);
  return initialsArr.join('').toUpperCase();
}

export const formatMoney = (dollarValue) => {
  const dollarValueStr = dollarValue.toString();
  if (dollarValueStr.length <= 3) {
    return '$' + dollarValueStr;
  } else {
    var dollarValueWithCommas = '';
    for (var i = dollarValueStr.length - 1; i >= 0; i--) {
      if ((dollarValueStr.length - i) % 3 === 0 && i > 0) {
        dollarValueWithCommas = ',' + dollarValueStr[i] + dollarValueWithCommas;
      } else {
        dollarValueWithCommas = dollarValueStr[i] + dollarValueWithCommas;
      }
    }
  }
  return '$' + dollarValueWithCommas;
}
