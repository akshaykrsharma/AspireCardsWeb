import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../common/Header';
import Strings from '../../../res/Strings';
import { formPropType } from '../../../interfaces/interface';
import APIManager from '../../../networking/APIManager';
import EndPoints from '../../../networking/EndPoints';

function renderTextField(propT: formPropType) {
	const { id, label, placeholder, value, setValue } = propT;
	return (
		<Form.Group className="mb-3" controlId={id}>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				value={value}
				onChange={evt => {
					setValue(evt.target.value);
				}}
				type={label}
				placeholder={placeholder}
			/>
		</Form.Group>
	);
}

function Home() {
	const [name, setName] = useState('');
	const [weekly_spend, setWeeklySpend] = useState('');
	const [weekly_max, setWeeklyMax] = useState('');
	const [balance, setBalance] = useState('');

	function fetchOrUpdateUserData(update: boolean, params: Object, userData: Function) {
		APIManager.getResponse(
			EndPoints.getUserEndPoints(),
			update ? EndPoints.Method.PATCH : EndPoints.Method.GET,
			params,
			(status: boolean, response: any) => {
				if (status && response?.data) {
					userData({
						name: response?.data?.name,
						weekly_spend: response?.data?.weekly_spend,
						weekly_max: response?.data?.weekly_max,
						balance: response?.data?.balance
					});
					// setName(response?.data?.name);
					// setWeeklySpend(response?.data?.weekly_spend);
					// setWeeklyMax(response?.data?.weekly_spend);
					// setBalance(response?.data?.balance);
				} else {
					//It will Provide Error
					console.log(response);
				}
			}
		);
	}

	useEffect(() => {
		fetchOrUpdateUserData(false, {}, (userData: any) => {
			if (!!userData) {
				setName(userData.name);
				setWeeklySpend(userData.weekly_spend);
				setWeeklyMax(userData.weekly_max);
				setBalance(userData.balance);
			}
		});
	}, []);

	return (
		<div>
			<Header title={Strings.appName}></Header>
			<Form style={styles.containerStyle}>
				{renderTextField({
					label: Strings.FormData.name,
					id: Strings.FormData.name,
					placeholder: Strings.FormData.enterName,
					value: name,
					setValue: (text: string) => {
						setName(text);
					}
				})}
				{renderTextField({
					label: Strings.FormData.balance,
					id: Strings.FormData.balance,
					placeholder: Strings.FormData.enterBalance,
					value: balance,
					setValue: (text: string) => {
						setBalance(text);
					}
				})}
				{renderTextField({
					label: Strings.FormData.weekly_spend,
					id: Strings.FormData.weekly_spend,
					placeholder: Strings.FormData.enter_weekly_spend,
					value: weekly_spend,
					setValue: (text: string) => {
						setWeeklySpend(text);
					}
				})}
				{renderTextField({
					label: Strings.FormData.weekly_max,
					id: Strings.FormData.enter_weekly_max_limit,
					placeholder: Strings.FormData.enter_weekly_max_limit,
					value: weekly_max,
					setValue: (text: string) => {
						setWeeklyMax(text);
					}
				})}
				<Button
					onClick={() => {
						fetchOrUpdateUserData(true, { name, weekly_spend, weekly_max, balance }, (userData: any) => {
							if (!!userData) {
								setName(userData.name);
								setWeeklySpend(userData.weekly_spend);
								setWeeklyMax(userData.weekly_max);
								setBalance(userData.balance);
							}
						});
					}}
					variant="primary"
					type="submit"
				>
					{Strings.save}
				</Button>
			</Form>
		</div>
	);
}

let styles = {
	containerStyle: {
		marginLeft: '20%',
		marginRight: '20%'
	}
};

export default Home;
