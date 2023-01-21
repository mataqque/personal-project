import * as Yup from 'yup';

export const searchSchema = (values: any) =>
	Yup.object().shape({
		search: Yup.string().min(4).required(),
	});

export interface IFile {
	uuid: 'r2w16kqjprc';
	id: number;
	collection_name: string;
	compress: string;
	dir: string;
	encoding: string;
	file_name: string;
	mime_type: string;
	size: number;
	updated_at: Date;
	created_at: Date;
}
export interface IFileState {
	files: IFile[];
}
