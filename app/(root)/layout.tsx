import { PropsType } from '@/types';
import React from 'react';
import Navbar from './_compnents/navbat';

const Layout = ({ children }: PropsType) => {
	return (
		<div>
			<Navbar />
			<div className='mt-16'>{children}</div>
		</div>
	);
};

export default Layout;
