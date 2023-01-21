import React from 'react';
export const GridBody = (props: any) => {
	const { className } = props;
	return (
		<div className='grid-body scroll'>
			{React.Children.map(props.children, child => {
				return React.cloneElement(child, { className: className });
			})}
		</div>
	);
};
