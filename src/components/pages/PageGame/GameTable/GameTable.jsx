import React from 'react';
import Table from 'rc-table';
import dayjs from 'dayjs';

function GameTable({ game }) {
	function getCategoryName(category) {
		switch (category) {
			case 0:
				return 'Main game';
			case 1:
				return 'Dlc addon';
			case 2:
				return 'Expansion';
			case 3:
				return 'Bundle';
			case 4:
				return 'Standalone expansion';
			case 5:
				return 'Mod';
			case 6:
				return 'Episode';
			case 7:
				return 'Season';
			default:
				break;
		}
	}

	function makeUpdatedGameData(game) {
		const gameUpdated = Object.fromEntries(
			Object.entries({ ...game }).map(([key, value]) => {
				if (key === 'created_at') {
					return [key, dayjs(value).format('DD-MM-YYYY')];
				} else if (key === 'category') {
					return [key, getCategoryName(value)];
				}
				return [key, value];
			})
		);
		gameUpdated.key = 1;
		return gameUpdated;
	}

	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Aggregated rating',
			dataIndex: 'aggregated_rating',
			key: 'aggregated_rating',
			render: (value) => `${value}/100`,
		},
		{
			title: 'Created at',
			dataIndex: 'created_at',
			key: 'created',
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
		},
		{
			title: 'Url',
			dataIndex: 'url',
			key: 'url',
			render: (value) => <a href={value}>Game link</a>,
		},
	];

	return <Table columns={columns} data={[makeUpdatedGameData(game)]} className='game-table' />;
}

export default GameTable;
