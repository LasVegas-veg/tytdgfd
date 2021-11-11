import React from 'react';
import PropTypes from 'prop-types';

import { Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Load.css';

const Load = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Пополнить счет
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
		
     {
   <div>
        <div><center><h1>{"Error page"}</h1></center></div>
    </div>};

    


	</Panel>
)




Load.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};


export default Load;
