import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: 'https://paper-api.alpaca.markets/v2',
  headers: {
    'APCA-API-KEY-ID': 'PKNW7YRNWF516Q3A9WDB',
    'APCA-API-SECRET-KEY': 'TO3D7snKO3RUOsaxtDgSl1foVgbD46ICWCipnFi0'
  }
})

export default HTTPClient
