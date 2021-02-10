import { makeAutoObservable } from 'mobx';
import { api, setHeadersBearer } from '../api';
import storage from '../storage';

class UserStore {
	isAuth = false;
	isLoading = false;

	constructor() {
		makeAutoObservable(this);
	}

	getToken = async () => {
		try {
			this.isLoading = true;
			const params = `client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&grant_type=client_credentials`;
			const result = (await api.post(`https://id.twitch.tv/oauth2/token?${params}`)).data;
			storage.setBearer(result.access_token);
			setHeadersBearer(result.access_token);
			this.isAuth = true;
		} catch (error) {
			console.log(error);
		} finally {
			this.isLoading = false;
		}
	};

	toggleAuth() {
		this.isAuth = !this.isAuth;
	}
}

export default new UserStore();
