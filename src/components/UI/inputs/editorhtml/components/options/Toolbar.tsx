import { useEffect, useState } from 'react';
import { toolbar } from '../../config';
import { useSelector } from 'react-redux';
interface IInterfaceToolbar {
	children?: JSX.Element | JSX.Element[] | string;
}
export const Toolbar = (props: IInterfaceToolbar) => {
	const [config, setConfig] = useState({ toolbar });
	const selected = useSelector((state: any) => state.editorHtmlSlice.selected);
	const runCommand = (el: any, commandName: any, arg: any) => {
		// @ts-ignore
		let range = window.getSelection()?.getRangeAt(0) || {};
		window.selected = range;
		var selectedText = range.extractContents();
		var bold = document.createElement('b');
		bold.appendChild(selectedText);
		range.insertNode(bold);
		range.selectNodeContents(bold);
		selection.removeAllRanges();
		selection.addRange(range);
	};
	useEffect(() => {}, [selected]);
	return (
		<div className='toolbar-group'>
			<div className='toolbar-group-item form-style d-flex'>
				{config.toolbar.map((item, index) => {
					return item.options ? (
						<div className={`relative btn${index + 1}`} key={'toolbar-select' + index}>
							<div className='w-40'>
								<select
									className='input '
									onChange={e => {
										// selectOnChange(e);
									}}
								>
									{item.options.map((option, index) => {
										return (
											<option value={option.value} key={'tooloption' + index}>
												{option.name}
											</option>
										);
									})}
								</select>
							</div>
						</div>
					) : (
						<div
							className={`btn-toolbar`}
							onClick={e => {
								runCommand(e, item.type, null);
							}}
							key={'toolbar' + index}
						>
							<div className='icon'>
								<i className={`text-letter ${item.icon}`}></i>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
