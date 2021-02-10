import React from 'react';
import { Container, Spinner } from 'reactstrap';

function CustomSpinner() {
	return (
		<Container className='page-wrapper center'>
			<Spinner />
		</Container>
	);
}

export default CustomSpinner;
