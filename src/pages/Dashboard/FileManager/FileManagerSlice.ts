import { createSlice } from '@reduxjs/toolkit';
import { IFile } from './interface/Interface';
import { disableCheckables, generateId } from '../../../components/helpers/helpers';

const initialState = {
	activeModal: false,
	files: [] as IFile[],
	selectFile: [] as IFile[],
	filesUpload: [],
	onEvent: {},
};
const typeEvent = {
	upload: () => {},
};

const fileManagerSlice = createSlice({
	name: 'fileManager',
	initialState,
	reducers: {
		setActiveModal: (state, action) => {
			console.log(action.payload);
			state.activeModal = action.payload;
		},
		updateFile: (state, action) => {
			state.files = action.payload;
		},
		uploadFiles: (state, value) => {
			// state.filesUpload = value.payload;
		},
		selectFile: (state, action) => {
			let getFileSelected = state.files.filter(file => {
				let data = action.payload.includes(file.uuid);
				if (data === true) {
					file.id_selected = generateId({ type: 'string' }).toString();
					return file;
				}
			});
			state.selectFile = getFileSelected;
		},
		onSelect: (state, action) => {
			if (typeof action.payload === 'function') {
				state.onEvent = action.payload;
			} else {
				console.error('onSelect must be a function');
			}
		},
		clearFileSelected: state => {
			state.selectFile = [];
		},
	},
});

export const { setActiveModal, updateFile, selectFile, uploadFiles, onSelect, clearFileSelected } = fileManagerSlice.actions;
export default fileManagerSlice.reducer;
