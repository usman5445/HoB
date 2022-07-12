import axios from "axios";

export function registerCust(data) {
  axios
    .post("/customer", data)
    .then((resp) => console.log(resp))
    .catch((err) => console.error(err.response.data));
}
