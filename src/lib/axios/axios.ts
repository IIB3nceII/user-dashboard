import axios, { type AxiosInstance } from 'axios'

const jsonPlaceholderInstance: AxiosInstance = axios.create({
  baseURL: ' https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default jsonPlaceholderInstance
