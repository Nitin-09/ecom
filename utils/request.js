import axios from "axios";
const getAuthToken = () => localStorage.getItem('auth')
const setAuthToken = (auth) => localStorage.setItem('auth', auth)


const request = async (headers={}, url, method = 'GET', params = {}, body = {}) => {
    try {
        const config = { headers, url, method, params, body };
        const response = await axios(config);
        return response.data;

    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
};
export default request