export const extractInitials = (str1, str2) => {
  const initials = str1.charAt(0) + str2.charAt(0);
  return initials.toUpperCase();
}

//expects totalValue to be in cents
export const formatMoney = (totalValue) => {
  let totalValueStr = totalValue.toString();
  if (totalValueStr.length < 3) {
    totalValueStr = totalValueStr.padStart(3, '0');
  }
  const centsStr = totalValueStr.slice(-2);
  const dollarsStr = totalValueStr.slice(0, -2);


  if (dollarsStr.length <= 3) {
    return `$${dollarsStr}.${centsStr}`;
  } else {
    var dollarValueWithCommas = '';
    for (var i = dollarsStr.length - 1; i >= 0; i--) {
      if ((dollarsStr.length - i) % 3 === 0 && i > 0) {
        dollarValueWithCommas = ',' + dollarsStr[i] + dollarValueWithCommas;
      } else {
        dollarValueWithCommas = dollarsStr[i] + dollarValueWithCommas;
      }
    }
  }
  return `$${dollarValueWithCommas}.${centsStr}`;
}
