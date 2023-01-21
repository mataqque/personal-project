import { useEffect, useRef, useState } from 'react';
import { callbackDelay } from '../../../helpers/helpers';

export const ProgressBarCircle = (props: any) => {
	const {
		size = 150,
		progress = 0,
		trackWidth = 6,
		trackColor = `#ddd`,
		indicatorColor = `#07c`,
		indicatorCap = `round`,
		label = `Loading...`,
		labelColor = `#333`,
		spinnerMode = false,
		spinnerSpeed = 1,
	} = props;
	const [progressBar, setProgressBar] = useState(0);
	const contentBar = useRef<HTMLDivElement>(null);
	const center = size / 2;
	const radius = center - (trackWidth > trackWidth ? trackWidth : trackWidth);
	const dashArray = 2 * Math.PI * radius;
	const dashOffset = dashArray * ((100 - progressBar) / 100);
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 1.0,
	};
	const triggerEvent = (e: any) => {
		if (e[0].isIntersecting) {
			function initProgress() {
				let intervalId = setInterval(
					() =>
						setProgressBar(t => {
							if (t >= progress) {
								clearInterval(intervalId);
							}
							return t + 1;
						}),

					20 - progress * 0.15
				);
			}
			callbackDelay(() => initProgress(), 1000);
		}
	};
	useEffect(() => {
		const observer = new IntersectionObserver(triggerEvent, options);
		observer.observe(contentBar.current as Element);
	}, []);
	return (
		<>
			<div className='svg-pi-wrapper' style={{ width: size, height: size }} ref={contentBar}>
				<svg className='svg-pi' style={{ width: size, height: size }}>
					<circle className='svg-pi-track' cx={center} cy={center} fill='transparent' r={radius} stroke={trackColor} strokeWidth={trackWidth} />
					<circle
						className={`svg-pi-indicator ${spinnerMode ? 'svg-pi-indicator--spinner' : ''}`}
						style={{ animationDuration: spinnerSpeed * 1000 + 'ms' }}
						cx={center}
						cy={center}
						fill='transparent'
						r={radius}
						stroke={indicatorColor}
						strokeWidth={trackWidth}
						strokeDasharray={dashArray}
						strokeDashoffset={dashOffset}
						strokeLinecap={indicatorCap}
					/>
				</svg>
			</div>
		</>
	);
};
