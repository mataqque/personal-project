import { ImageBrand } from '../../../../pages/Account/components/brand';
import { IconMask } from '../../inputs/styled/IconDownStyleSelect';

export default function Footer() {
	return (
		<footer className='footer bg-secondary w-full py-10'>
			<div className='container flex flex-col items-center'>
				<div className='mb-6'>
					<ImageBrand className='bg-white h-20 w-20'></ImageBrand>
				</div>
				<div className='flex justify-center items-center mb-6'>
					<a
						href='https://www.facebook.com/cosapiinmobiliariaoficial/'
						target='_blank'
						className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-gray-10'
					>
						<IconMask className='icon-facebook bg-white h-4 w-4'></IconMask>
					</a>
					<a
						href='https://www.facebook.com/cosapiinmobiliariaoficial/'
						target='_blank'
						className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer mr-4 border border-gray-10'
					>
						<IconMask className='icon-instagram bg-white h-4 w-4'></IconMask>
					</a>
					<a
						href='https://www.facebook.com/cosapiinmobiliariaoficial/'
						target='_blank'
						className='rounded-full flex items-center justify-center w-12 h-12 duration-300 cursor-pointer border border-gray-10'
					>
						<IconMask className='icon-youtube bg-white h-4 w-4'></IconMask>
					</a>
				</div>
				<div className=''>
					<span className='text-white mr-8'>Politicas de privacidad</span>
					<span className='text-white mr-8'>Contacto</span>
					<span className='text-white '>LazoDetalles@gmail.com</span>
				</div>
			</div>
		</footer>
	);
}
