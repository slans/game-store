import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import storage from '../storage';
import '../assets/scss/index.scss';
import CustomSpinner from './common/CustomSpinner';
import Routes from './Routes';
import { setHeadersBearer } from '../api';

class App extends Component {
	componentDidMount() {
		const bearer = storage.getBearer();
		const { userStore } = this.props;
		if (bearer) {
			setHeadersBearer(bearer);
			userStore.toggleAuth();
		} else {
			userStore.getToken();
		}
	}

	render() {
		const { userStore } = this.props;

		if (userStore.isLoading) {
			return <CustomSpinner />;
		}

		if (userStore.isAuth) {
			return <Routes />;
		}

		return null;
	}
}

export default inject('userStore')(observer(App));
