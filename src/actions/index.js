import axios from 'axios';
const API_KEY='48c9b86ee3326609c2c17303219546b6';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FEACH_WEATHER='FEACH_WEATHER';
export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city},us`;
	const request=axios.get(url);
     // use of the console
	// console.log("request:",request);

	return{
		type:FEACH_WEATHER,
		payload:request
	
	}

}