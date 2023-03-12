import { Magnifier, GlassMagnifier, SideBySideMagnifier, PictureInPictureMagnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from 'react-image-magnifiers';
const image = require('../../../assets/images/global/images/dog.jpg');
const image1 = require('../../../assets/images/global/images/compress-WhatsApp Image 2023-02-20 at 12.webp');
const image2 = require('../../../assets/images/global/images/compress-WhatsApp Image 2023-02-14 at 9.webp');
import { useState } from 'react';
import './gallery.scss';
import { IconMask } from '../../../components/UI/inputs/styled/IconDownStyleSelect';
export const GalleryPageProduct = () => {
	const [imageSelected, setImageSelected] = useState(image);
	const list = [image, image1, image2];
	const switchSides = true;
	const changeImage = (item: any) => {
		setImageSelected(item);
	};
	return (
		<section className='gallery'>
			<div className='container flex gap-8'>
				<div className='w-1/2'>
					<div className='flex mb-4'>
						<SideBySideMagnifier
							className='input-position'
							style={{ order: switchSides ? '1' : '0' }}
							imageSrc={imageSelected}
							largeImageSrc={imageSelected}
							alwaysInPlace={true}
							overlayOpacity={0.5}
							switchSides={switchSides}
							inPlaceMinBreakpoint={641}
							fillAvailableSpace={true}
							fillAlignTop={false}
							zoomContainerBorder='1px solid #ccc'
							// zoomContainerBoxShadow='0 4px 8px rgba(0,0,0,.5)'
						/>
					</div>
					<div className='controls flex gap-4'>
						{list.map((item, index) => {
							return (
								<div className='content-img' onClick={() => changeImage(item)}>
									<img src={item} alt='' />
								</div>
							);
						})}
					</div>
				</div>
				<div className='w-1/2'>
					<div className='content-info'>
						<h1 className='title text-3xl mb-3 IBMPlexSans-Bold text-primary'>Peluche Oso blanco con chompa de 90cm </h1>
						<p className='paragraph'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
						<span className='mb-2 mt-8 text-2xl flex'>Escoge un color</span>
						<div className='flex content-colors mb-8'>
							<div className='colors bg-rose'></div>
							<div className='colors bg-brown'></div>
							<div className='colors bg-blue'></div>
							<div className='colors bg-green'></div>
						</div>
						<div className='flex items-center mb-8'>
							<div className='buy-order flex mr-4'>
								<div className='flex items-center cursor-pointer'>
									<svg aria-hidden='true' focusable='false' role='presentation' className='icon icon-minus' viewBox='0 0 20 20'>
										<path
											fill='#444'
											d='M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z'
										></path>
									</svg>
								</div>
								<span className='number'>1</span>
								<div className='flex items-center cursor-pointer'>
									<svg aria-hidden='true' focusable='false' role='presentation' className='icon icon-plus' viewBox='0 0 20 20'>
										<path
											fill='#444'
											d='M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z'
										></path>
									</svg>
								</div>
							</div>
							<p className='paragraph'>
								Solo <span>12 unidades</span> disponibles
							</p>
						</div>
						<div className='flex mb-8'>
							<div className=''>
								<div className='rounded-full text-white border-secondary bg-secondary mr-2 px-8 h-12 whitespace-nowrap hover:text-white w-max flex items-center cursor-pointer'>
									Comprar ahora
								</div>
							</div>
							<div className=''>
								<div className='rounded-full text-secondary border-2 border-secondary bg-white-100 mr-2 px-8 h-12 whitespace-nowrap hover:bg-secondary hover:text-white w-max flex items-center cursor-pointer transition duration-150 ease-out md:ease-in'>
									Agregar Carrito
								</div>
							</div>
						</div>
						<div className='delivery'>
							<div className='flex items-center'>
								<IconMask className='icon-delivery w-9 h-8 bg-primary mr-3' />
								Delivery gratis
							</div>
							<div className='flex items-center'>
								<IconMask className='icon-delivery w-9 h-8 bg-primary mr-3' />
								<div className='options'>Tiempo de envio 3-5 dias</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
