import React from 'react';
import { Container } from 'reactstrap';

function Header({ title }) {
	return (
		<header className='header'>
			<Container className='d-flex justify-content-center'>
				<h1 className='mb-0'>{title}</h1>
			</Container>
		</header>
	);
}

export default Header;
