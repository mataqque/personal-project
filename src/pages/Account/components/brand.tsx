import styled from 'styled-components';
import { IconMask } from '../../../components/UI/inputs/styled/IconDownStyleSelect';
import brand from '../../../assets/images/global/icons/brand-lazo.svg?url';

interface IProps {
	sizeH?: string;
	sizeW?: string;
}
export const ImageBrand = styled(IconMask)`
	display: block;
	mask-image: url(${brand});
`;
