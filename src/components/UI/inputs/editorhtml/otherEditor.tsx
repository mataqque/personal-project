import React, { useState, useRef } from 'react';

const Editor = () => {
	const [html, setHtml] = useState('');
	const [selection, setSelection] = useState<Range | null>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setHtml(event.target.value);
	};

	const handleSave = () => {
		// Guardar el contenido HTML en el servidor
	};

	const handleUndo = () => {
		// Deshacer la última acción del usuario
	};

	const handleRedo = () => {
		// Rehacer la última acción del usuario
	};

	const handleBold = () => {
		if (!selection) {
			return;
		}
		const range = selection.cloneRange();
		const content = range.extractContents();
		const bold = document.createElement('strong');
		bold.appendChild(content);
		range.insertNode(bold);
		setHtml(textAreaRef.current?.value || '');
	};

	const handleSelectionChange = () => {
		setSelection(window.getSelection()?.getRangeAt(0));
	};

	return (
		<div>
			<textarea value={html} onChange={handleInputChange} ref={textAreaRef} onSelect={handleSelectionChange} />
			<button onClick={handleSave}>Guardar</button>
			<button onClick={handleUndo}>Deshacer</button>
			<button onClick={handleRedo}>Rehacer</button>
			<button onClick={handleBold}>Negrita</button>
			<style>
				{`
          strong {
            font-weight: bold;
          }
        `}
			</style>
		</div>
	);
};

export default Editor;
