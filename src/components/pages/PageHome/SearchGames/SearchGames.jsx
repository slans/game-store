import React from 'react';
import { Button, Col, Form, Input, Row } from 'reactstrap';

function SearchGames({ search, handleChangeSearch, handleSubmitSearch }) {
	return (
		<Form onSubmit={handleSubmitSearch}>
			<Row className='justify-content-center' noGutters>
				<Col xs='6'>
					<Row noGutters>
						<Col xs='9'>
							<Input name='gameName' placeholder='Search game' value={search} onChange={handleChangeSearch} />
						</Col>
						<Col xs='3' className='pl-3'>
							<Button className='d-block w-100' type='submit'>
								Search
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Form>
	);
}

export default SearchGames;
