import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import CustomSpinner from '../../common/CustomSpinner';
import Header from '../../Header/Header';
import GameTable from './GameTable/GameTable';

class PageGame extends Component {
	componentDidMount() {
		const { gameId } = this.props.match.params;
		this.props.gamesStore.fetchGame(gameId);
	}

	render() {
		const { game, isLoading } = this.props.gamesStore;

		if (isLoading) {
			return <CustomSpinner />;
		}

		if (game) {
			return (
				<div className='page-wrapper flex-column'>
					<Header title={game.name} />
					<main className='main'>
						<Container>
							<div className='mb-3'>
								<Link to='/'>Back to Home page</Link>
							</div>
							<GameTable game={game} />
						</Container>
					</main>
				</div>
			);
		}

		return null;
	}
}

export default inject('gamesStore')(observer(PageGame));
