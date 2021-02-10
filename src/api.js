import axios from 'axios';
const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4';

const api = axios.create({
	baseURL,
});

const setHeadersBearer = (token) => {
	api.defaults.headers.common = {
		'Client-ID': `${process.env.REACT_APP_CLIENT_ID}`,
		Authorization: `Bearer ${token}`,
	};
};

const removeHeadersBearer = () => {
	api.defaults.headers.common = {
		'Client-ID': '',
		Authorization: '',
	};
};

export { api, setHeadersBearer, removeHeadersBearer };
