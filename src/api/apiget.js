import axios from 'axios'

const baseURL = 'http://localhost:4000/api/v1'

export default (method, url, data, headers) => axios({
    baseURL,
    method,
    url,
    data,
    headers
})