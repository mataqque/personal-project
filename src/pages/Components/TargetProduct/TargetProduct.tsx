import { ITargetProdcut } from '../../Home/interfaces/interface';
import Slider from 'react-slick';
import './TargetProduct.scss';
import { ButtonBase } from '../../../components/UI/GlobalComponents/buttons/buttonBase';
export const TargetProduct = (props: any) => {
	const { images = '', title, price } = props.data;
	const settings = {
		arrows: false,
		dots: true,
		infinite: false,
		speed: 1000,
		autoplaySpeed: 6000,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		pauseOnHover: false,
	};
	const currentConvert = (price: number) => {
		return price.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
	};
	return (
		<div className='target-product'>
			<div className='content-product flex flex-wrap'>
				<div className='slider'>
					<div className='drop-shadow'></div>
					{
						<Slider {...settings}>
							{images.map((item: any, index: number) => {
								return (
									<div className='content-img' key={index + 'banner'}>
										<img src={item} alt='' className='w-full' />
									</div>
								);
							})}
						</Slider>
					}
				</div>
				<div className='flex flex-col py-4 px-6'>
					<div className='flex items-start justify-center flex mb-4'>
						<span className='title IBMPlexSans-Bold text-secondary'>{title}</span>
						<span className='price IBMPlexSans-Bold text-primary'>{currentConvert(price)}</span>
					</div>
					<div className='flex'>
						<ButtonBase rounded className='mr-2 bg-lemon text-white border-lemon'>
							Comprar
						</ButtonBase>
						<ButtonBase rounded className='w-full'>
							Añadir al carrito
						</ButtonBase>
					</div>
				</div>
			</div>
		</div>
	);
};
