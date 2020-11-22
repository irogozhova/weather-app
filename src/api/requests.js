import axios from "axios";
import config from "config";

export const getWeatherData = (city) => {
  return axios({
    method: "get",
    url: `${config.remoteApiUrl}?q=${city}&units=metric&appid=${config.API_KEY}`,
  }).then((result) => result.data);
};
