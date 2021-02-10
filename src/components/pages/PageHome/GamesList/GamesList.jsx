import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import defaultImage from '../../../../assets/images/missing-screenshot.jpg';

function GamesList({ games }) {
	function renderGames() {
		return games.map((game) => {
			return (
				<Col key={game.id} className='mt-4'>
					<Link to={`/game/${game.id}`}>
						<img
							src={
								'screenshots' in game
									? `https://images.igdb.com/igdb/image/upload/t_screenshot_med/${game.screenshots[0].image_id}.jpg`
									: defaultImage
							}
							alt=''
							className='w-100'
						/>
						<div className='h4 mt-2'>{game.name}</div>
					</Link>
				</Col>
			);
		});
	}

	return (
		<>
			<Row className='mt-3' xs='2'>
				{renderGames()}
			</Row>
		</>
	);
}

export default GamesList;
