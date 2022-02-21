import React from 'react'
import { HeaderProps } from '../../interfaces/interface';
import Images from '../../res/Images';
// import '../../App.css';
export default function Header(props: HeaderProps) {
	return (
		<div className={'Title'}><img alt-text={"LOGO"} src={Images.logo.source} style={Images.logo.style}></img></div>
	);
}