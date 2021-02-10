const BEARER = 'Bearer';

class Storage {
	setBearer(token) {
		localStorage.setItem(BEARER, token);
	}
	getBearer() {
		return localStorage.getItem(BEARER);
	}
	clearBearer() {
		localStorage.removeItem(BEARER);
	}
}

export default new Storage();
