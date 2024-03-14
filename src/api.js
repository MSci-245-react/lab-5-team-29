import axios from 'axios';
const client = axios.create({
  baseURL: 'https://api.outsidein.dev/gn4pDzxfgON4W9inoO5126oiZNyCRaiB',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};
export default api;
