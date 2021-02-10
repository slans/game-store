import { inject, observer } from 'mobx-react';
import Pagination from 'rc-pagination';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CustomSpinner from '../../common/CustomSpinner';
import Header from '../../Header/Header';
import GamesList from './GamesList/GamesList';
import SearchGames from './SearchGames/SearchGames';
import '../../../assets/scss/rc-paginations.css';

class PageHome extends Component {
	state = {
		search: '',
	};

	handleChangeSearch = (e) => {
		this.setState({ search: e.target.value });
	};

	handleSubmitSearch = (e) => {
		e.preventDefault();
		this.props.gamesStore.searchGame(this.state.search);
	};

	handleChangePage = (page) => {
		this.props.gamesStore.changePage(page);
	};

	componentDidMount() {
		this.props.gamesStore.fetchGames();
	}

	render() {
		const { search } = this.state;
		const { currentPage, perPage, games, isLoading, pageGames } = this.props.gamesStore;

		if (isLoading) {
			return <CustomSpinner />;
		}

		return (
			<div className='page-wrapper flex-column'>
				<Header title='Game store' />
				<main className='main'>
					<Container>
						<SearchGames
							search={search}
							handleChangeSearch={this.handleChangeSearch}
							handleSubmitSearch={this.handleSubmitSearch}
						/>
						{pageGames && <GamesList games={pageGames} />}
						{games && games.length > 10 && (
							<Pagination
								current={currentPage}
								pageSize={perPage}
								total={games.length}
								onChange={this.handleChangePage}
								className='mt-4'
							/>
						)}
					</Container>
				</main>
			</div>
		);
	}
}

export default inject('gamesStore')(observer(PageHome));
