import axios from 'axios'

const API = 'https://api.nasa.gov/neo/rest/v1/neo/'

const http = axios.create({baseURL: API})

export default http