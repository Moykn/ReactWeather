import axios from "axios";

const OPEN_WEATHER_MAP_URL =
  "https://api.openweathermap.org/data/2.5/weather?appid=eb66fc9f929d94ccde159be9c8b3f985&units=metric";
  //"http://samples.openweathermap.org/data/2.5/find?appid=eb66fc9f929d94ccde159be9c8b3f985&units=metric";
//q=Philadelphia

export default {
  getTemp: location => {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(
      response => {
          if(response.data.cod && response.data.message){
            throw new Error(response.data.message);
          }else{
              return response.data.main.temp;
          }
      },
      response => {
        throw new Error(response.data.message);
      }
    );
  }
};
