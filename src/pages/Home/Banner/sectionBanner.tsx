import Slider from 'react-slick';
import './banners.scss';
export const Banner = () => {
	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 6000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		pauseOnHover: false,
	};
	const banners = [
		{ img: require('../../../assets/images/home/images/banner-san-valentin.jpg') },
		{ img: require('../../../assets/images/home/images/banner-san-valentin.jpg') },
		{ img: require('../../../assets/images/home/images/banner-san-valentin.jpg') },
	];
	return (
		<section>
			<div className='slider-banner w-full'>
				<Slider {...settings}>
					{banners.map((item, index) => {
						return (
							<div className='content-img' key={index + 'banner'}>
								<img src={item.img} alt='' className='w-full' />
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};
