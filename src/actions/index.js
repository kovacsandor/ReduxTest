import axios from 'axios'

const API_KEY = `f4e31c987b18c20ea9d9fe3d412ee0d2`
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const ActionType = {

    FETCH_WEATHER: `FETCH_WEATHER`,
}

export function createActionFetchWeather(city) {
    const request = axios.get(`${API_URL}&q=${city},us`)
    // const request = axios.get(`${API_URL}&q=${city},us`)
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))

    //console.log(`Request:`, request)

    return {
        type: ActionType.FETCH_WEATHER,
        payload: request,
    }
}

