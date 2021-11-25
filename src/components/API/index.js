const URL = "https://openexchangerates.org/api/";
let typeResponse = "latest.json?";
const apiId = "app_id=17cb63b78edc40d6bf2f6dcf63bce9e5";

export function getCources() {
  return fetch(`${URL}${typeResponse}${apiId}`).then((data) => data.json());
}
