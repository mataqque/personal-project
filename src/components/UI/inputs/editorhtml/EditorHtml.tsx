import { useEffect, useRef, useState } from 'react';
import './EditorHtml.scss';
import ResizerLibrary from './script';
import { IInterfaceEditorHtml } from './interface';
import { ContainerEditor } from './components/contenedorEditor/containerEditor';
import { Toolbar } from './components/options/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from './editohtmlSlice';
import { obsEditorHtml } from './observer';
declare global {
	interface Window {
		[propName: string]: any;
	}
}
export function EditorHtml(props: IInterfaceEditorHtml) {
	const { initialHtml, className } = props;
	const [selection, setSelection] = useState<Range | null>(null);
	const dispatch = useDispatch();
	const removeSelected = () => {};

	const MouseEvent = (e: any) => {};
	const handleMouseUp = (e: any) => {
		console.log('up', e.target.getBoundingClientRect());
	};
	const selectOnChange = (e: any) => {
		// if (selected != null) {
		// 	let textSelected = selected.selection.toString();
		// 	console.log(textSelected);
		// 	runCommand(e, 'insertHtml', `<${e.target.value}>${textSelected}</${e.target.value}>`);
		// 	removeSelected();
		// }
	};
	const onChangeEditor = (e: any) => {
		// obsEditorHtml.next(range);
	};
	const handleBold = () => {
		var selection = window.getSelection();
		if (selection && selection.rangeCount) {
			var range = selection.getRangeAt(0);
			var selectedText = range.extractContents();
			var bold = document.createElement('b');
			bold.appendChild(selectedText);
			range.insertNode(bold);
		}
	};
	useEffect(() => {
		// let Resizer = new ResizerLibrary({ container: '.containers' });
		// setResizer(Resizer);
	}, []);
	return (
		<ContainerEditor>
			<Toolbar />
			<div
				className='content-textarea'
				// onMouseMove={(e)=>{Resizer.onMouseMove(e)}}
				// onClick={(e)=>{Resizer.click(e)}}
				// onMouseUpCapture={(e)=>{Resizer.onMouseUpCapture(e)}}
			>
				<div
					className='containers scroll'
					contentEditable
					// onInput={e => {
					// 	onChangeEditor(e);
					// 	Resizer.onChangeEvent(e);
					// }}
					onMouseUp={e => onChangeEditor(e)}
					// onScroll={e => {
					// 	Resizer.onChangeEvent(e);
					// }}
					// onInput={(e: any) => onChangeEditor(e)}
					// ref={editor}
					// dangerouslySetInnerHTML={{ __html: initialHtml }}
				>
					{/* <img src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80'> </img> */}
					{/* <img src='https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg' /> */}
				</div>
			</div>
		</ContainerEditor>
	);
}
