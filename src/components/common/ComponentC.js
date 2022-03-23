import React, { useContext } from 'react';

import { NameContext } from '../../App';

export default function ComponentC() {
	const user = useContext(NameContext);
	return (
		<div>
			<h1>{user}</h1>
		</div>
	);

	//We can also use above short statement using useContext to get value of provider directly
	// return (
	// 	<NameContext.Consumer>
	// 		{value => {
	// 			return (
	// 				<div>
	// 					<h1>{value}</h1>
	// 				</div>
	// 			);
	// 		}}
	// 	</NameContext.Consumer>
	// );
}
