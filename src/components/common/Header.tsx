import React from 'react'
import { HeaderProps } from '../../interfaces/interface';
// import '../../App.css';
export default function Header(props: HeaderProps) {
	return (
		<div className={'Title'}><h1>{props.title}</h1></div>
	);
}