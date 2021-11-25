export function resultExchangeRate(textOfInput, getCourseExchange) {
  const requesExchangeRate = textOfInput;
  const searchNeededСurrency = Object.entries(getCourseExchange);
  const summaForExchange = +requesExchangeRate[0];
  const toNeededCorrency = requesExchangeRate[3];
  const foundNeededCorrency = searchNeededСurrency.find(
    (item) => item[0] === toNeededCorrency
  );
  return Math.floor(summaForExchange * foundNeededCorrency[1] * 100) / 100;
}
export function getRequesChangeCurrency(target) {
  return target.value.split(" ");
}
