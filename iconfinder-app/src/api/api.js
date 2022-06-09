import * as p from "../config/config";
import AxiosInstance from "../util/AxiosInstance";

const url = `q=Pune&appid=${p.API_KEY}`;
const mainurl = p.API_BASE_URL + url;

export async function getWeatherByLocation() {
  const resp = await fetch(mainurl, { origin: "cors" });
  const respData = await resp.json();

  console.log(respData);
}

getWeatherByLocation();
// function URL() {}
// export default URL;
