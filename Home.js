import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Link, List, HeaderButton, platform, removeEventListener, PanelHeaderBack } from '@vkontakte/vkui';
import Icon24Message from '@vkontakte/icons/dist/24/message';
import { Icon24ErrorCircle } from '@vkontakte/icons';










		
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Las Vegas Bank</PanelHeader>
		


		<Group header={<Header mode="secondary">Главная</Header>}>
		<Div style={{display: 'flex'}}>
       <Button size="l" stretched style={{ marginRight: 90 }}  onClick={go} data-to="Load" >Пополнить счет</Button>
       <Button size="l" onClick={go} data-to="Vivod" stretched mode="secondary"   >Вывести</Button>
     </Div>
			
	 </Group>


		<Group header={<Header mode="secondary">Переводы</Header>}>
			<Div>
			<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
			Переводы
				</Button>
	
			</Div>


			<Group header={<Header mode="secondary">Test</Header>}>
			<Div>
			<Button stretched size="l" mode="secondary" onClick={go} data-to="Help">
			Help
				</Button>
			</Div>

		</Group>


		</Group>



	 				<Div>
                        <Button mode="secondary" size="l" stretched={true} onClick={() => setPage('Home', 'Help')}>Список моих
                            групп</Button>
                    </Div> 



						
					 <Icon24ErrorCircle width={100} height={30} onClick={go} data-to="Pers" />
			
				

					

	</Panel>


);





Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};


export default Home;
