import React, { createContext } from 'react';

import { NameContext } from '../../App';
export default function ComponentC() {
	return (
		<NameContext.Consumer>
			{value => {
				return (
					<div>
						<h1>{value}</h1>
					</div>
				);
			}}
		</NameContext.Consumer>
	);
}
