import { useEffect, useState } from 'react';
import { TargetProduct } from '../../Components/TargetProduct/TargetProduct';
import './sectionCollections.scss';
import { useGetProductsMutation } from '../productsSlice';
export const SectionCollection = () => {
	const [targetProducts, setTargetProducts] = useState([]);
	const [getProduct, {}] = useGetProductsMutation();
	const updateData = async () => {
		const { data }: any = await getProduct(1);
		setTargetProducts(data.data);
	};
	useEffect(() => {
		updateData();
	}, []);

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
