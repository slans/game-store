import { makeAutoObservable, flow } from 'mobx';
import { api } from '../api';

class GamesStore {
	games = null;
	game = null;
	currentPage = 1;
	perPage = 10;
	isLoading = true;

	constructor() {
		makeAutoObservable(this);
	}

	changePage(page) {
		console.log('page', page);
		this.currentPage = page;
	}

	get pageGames() {
		if (this.games) {
			return this.games.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
		}
		return null;
	}

	*fetchGames() {
		try {
			this.isLoading = true;
			const result = (yield api.post('/games', 'fields name, screenshots.image_id;')).data;
			this.games = result;
		} catch (error) {
			console.log(error);
		} finally {
			this.isLoading = false;
		}
	}

	*searchGame(text) {
		try {
			this.isLoading = true;
			const result = (yield api.post('/games', `search "${text}"; limit 33; fields name, screenshots.image_id;`)).data;
			this.games = result;
		} catch (error) {
			console.log(error);
		} finally {
			this.isLoading = false;
		}
	}

	*fetchGame(gameId) {
		try {
			this.isLoading = true;
			const result = (yield api.post(
				'/games',
				`fields name, created_at, category, url, aggregated_rating; where id=${gameId};`
			)).data;
			this.game = result[0];
		} catch (error) {
			console.log(error);
		} finally {
			this.isLoading = false;
		}
	}
}

export default new GamesStore();
