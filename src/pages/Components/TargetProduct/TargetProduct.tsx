import { ITargetProdcut } from '../../Home/interfaces/interface';
import Slider from 'react-slick';
import './TargetProduct.scss';
import { ButtonBase, ButtonBaseFull, ButtonBaseRadio } from '../../../components/UI/GlobalComponents/buttons/buttonBase';
import { generateUrl } from '../../../components/helpers/helpers';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { IProductSchema } from '../../Dashboard/GestionProduct/interface';
export const TargetProduct = (props: any) => {
	const { images = [], name_product, price, url }: IProductSchema = props.data;
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 4000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		pauseOnHover: false,
	};
	const currentConvert = (price: number | string) => {
		return price.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
	};
	return (
		<div className='target-product'>
			<div className='content-product flex'>
				<div className='slider'>
					<div className='drop-shadow'></div>
					{
						<Slider {...settings}>
							{images.map((item: any, index: number) => {
								return (
									<div className='content-img' key={index + 'banner'}>
										<img src={generateUrl(item)} alt='' className='w-full' />
									</div>
								);
							})}
						</Slider>
					}
				</div>
				<div className='flex flex-col py-4 px-6 h-full'>
					<div className='flex items-start justify-center flex mb-2'>
						<span className='title IBMPlexSans-Bold text-secondary'>{name_product}</span>
						<span className='price IBMPlexSans-Bold text-primary'>{currentConvert(price)}</span>
					</div>
					<div className='flex-col mb-2'>
						<p className='paragraph text-secondary opacity-70'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quo itaque consectetur delectus incidunt odio, ipsum, doloremque consequatur dicta, unde inventore totam
							reprehenderit eius dolorum ipsam fugit explicabo aspernatur hic.
						</p>
					</div>
					<div className='flex mt-auto'>
						<Link to={`/product${url}`} className='w-full mr-2'>
							<ButtonBaseFull rounded className=' bg-lemon text-white border-lemon w-full'>
								Comprar
							</ButtonBaseFull>
						</Link>
						<ButtonBaseRadio rounded className='btn-cart mr-2'>
							<AddShoppingCartIcon className=''></AddShoppingCartIcon>
						</ButtonBaseRadio>
						<ButtonBaseRadio rounded className='btn-heart'>
							<FavoriteBorderIcon className=''></FavoriteBorderIcon>
						</ButtonBaseRadio>
					</div>
				</div>
			</div>
		</div>
	);
};
