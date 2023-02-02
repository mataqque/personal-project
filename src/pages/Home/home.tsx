import { MainContainer } from '../../components/UI/container/main';
import { Banner } from './Banner/sectionBanner';
import { SectionCollection } from './SectionCollection/sectionCollection';

export const Home = () => {
	return (
		<MainContainer>
			<Banner></Banner>
			<SectionCollection></SectionCollection>
		</MainContainer>
	);
};
