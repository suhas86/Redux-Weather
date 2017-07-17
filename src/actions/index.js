import axios from 'axios';

const API_KEY = "a27d9ceacd52f69abfffd5de4acaaaf3";

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},IN`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}