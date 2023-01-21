import { Helmet } from 'react-helmet-async';
import Navbar from '../UI/Page/Navbar/navbar';
import Footer from '../UI/Page/Footer/footer';

export default function PublicRoute(props: any) {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
}
