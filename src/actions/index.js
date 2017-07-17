const API_KEY = "a27d9ceacd52f69abfffd5de4acaaaf3";

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(){
    return {
        type:FETCH_WEATHER
    };
}