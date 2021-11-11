import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Help.css';

const Help = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Page
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
		
    <div>
        <div><center><h1>{"Error page"}</h1></center></div>
    </div>

	</Panel>
);




Help.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};




export default Help;