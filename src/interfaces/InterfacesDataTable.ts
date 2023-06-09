export interface ITHeadProps {
  columns: string[];
}

export interface ITCellProps {
  value: string | number | boolean | JSX.Element | undefined | null;
}

export interface ITBodyProps {
  cells: IWarrantyData[];
}
  
export interface IWarrantyData {
  rutTaker: string;
  numberReference: string;
  originDate: string;
  expirationDate: string;
  documentType: string;
  currency: string;
  amount: string;
  ticketStatus: string;
}