import React from 'react';
export const GridBody = (props: any) => {
	const { className } = props;
	return (
		<div className='grid-body scroll'>
			{React.Children.map(props.children, (child, index) => {
				return React.cloneElement(child, { className: className + ' ' + child.props.className + ' ' + `${index % 2 === 0 ? 'mark-column' : ''}` });
			})}
		</div>
	);
};
