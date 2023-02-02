export interface IInterfaceEditorHtml {
	initialHtml: string;
	className?: string;
	getHtml: (html: string) => void;
}
