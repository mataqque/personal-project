import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
	const [data, setData] = useState(true);
	return <Helmet></Helmet>;
};
