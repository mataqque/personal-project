export interface IDataGridTable {
	pageIndex?: Function;
	deleteFn?: Function;
	dataGrid: {
		data: any[];
		records: {
			cant: number;
			limit: number;
		};
	};
}
