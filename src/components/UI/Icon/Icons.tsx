import Lottie from 'react-lottie';
import { useState, useEffect } from 'react';
import { callbackDelay } from '../../../helpers/helpers';
type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
interface IIconProps {
	delay?: number;
	active?: boolean;
	properties: {
		icon: any;
		positionCss: Position;
		witdh?: number;
		height?: number;
		class?: string;
	};
}

export const IconLottie = (props: IIconProps) => {
	const [hidden, setHidden] = useState<boolean>(false);
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: props.properties.icon,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
		positionCss: props.properties.positionCss || 'absolute',
	};
	useEffect(() => {
		if (props.active === true) {
			callbackDelay(() => setHidden(true), props.delay);
		}
	}, [props.active]);
	if (hidden === true) return null;
	return (
		<div className={`loader ${props.properties.class ? props.properties.class : ''} ${props.active === true ? 'hidden' : ''}`} style={{ position: defaultOptions.positionCss }}>
			<Lottie
				options={defaultOptions}
				height={props.properties.height ? props.properties.height : 'auto'}
				width={props.properties.witdh ? props.properties.witdh : 'auto'}
				// isStopped={this.state.isStopped}
				// isPaused={this.state.isPaused}
				// speed={this.state.speed}
			></Lottie>
		</div>
	);
};
