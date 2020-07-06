import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID Cf2JxX04JQ9Ag6Ht1BxGK0pk3ShqkBfZxWOrrXPqDYQ'
 }
})