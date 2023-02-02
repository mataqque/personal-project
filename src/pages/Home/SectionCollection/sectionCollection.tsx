import { TargetProduct } from '../../Components/TargetProduct/TargetProduct';
import { ITargetProdcut, ITargetProducts } from '../interfaces/interface';
import './sectionCollections.scss';
export const SectionCollection = () => {
	const targetProducts = [
		{
			title: 'Ositos Blancos 1 con chompa y gorrito',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
		{
			title: 'Ositos',
			price: 100,
			linkTo: '/products/1',
			images: [require('../../../assets/images/global/images/ositos.webp'), require('../../../assets/images/global/images/ositos-alternate.webp')],
			discount: 20,
		},
	];
	return (
		<section className='pb-40'>
			<div className='container'>
				<h1 className='md:text-5xl sm:text-4xl movil:text-3xl text-center mb-16 mt-16 text-secondary'>Nuetros peluches</h1>
				<div className='content-target-products flex-wrap'>
					{targetProducts.map((product, index) => {
						return <TargetProduct key={index} data={product} />;
					})}
				</div>
			</div>
		</section>
	);
};
