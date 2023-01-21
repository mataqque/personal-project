import { IconDownStyleSelect, IconMask } from './styled/IconDownStyleSelect';

interface IIconInput {
	icon: string;
}
interface IIconTogglePassword {
	showPassword: () => void;
	icon: string;
}

export const IconInput = (props: IIconInput) => {
	return (
		<div className='content-icon'>
			<IconMask className='mask' style={{ WebkitMaskImage: `url(${props.icon})`, backgroundColor: `var(--letterInput)` }}></IconMask>
		</div>
	);
};

export const IconTogglePassword = (props: IIconTogglePassword) => {
	return (
		<div
			className='content-icon'
			onClick={() => {
				props.showPassword();
			}}
		>
			<IconMask className='mask' style={{ WebkitMaskImage: `url(${props.icon})` }}></IconMask>
		</div>
	);
};

export const IconInputSelect = (props: any) => {
	return (
		<IconDownStyleSelect
			className={`content-icon ${props.open ? 'open' : ''}`}
			onClick={() => {
				props.showPassword();
			}}
		>
			<IconMask style={{ WebkitMaskImage: `url(${props.icon})`, width: '1rem', height: '1rem' }} className={props.class}></IconMask>
		</IconDownStyleSelect>
	);
};
