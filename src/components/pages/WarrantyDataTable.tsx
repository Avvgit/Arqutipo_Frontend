import { useContext } from "react";
import { TableContext } from "../../context/TableContext";
import {
  ITHeadProps,
  IWarrantyData,
} from "../../interfaces/InterfacesDataTable";
import { DataTable } from "../organism/DataTable";
import { THEADPROPS } from "../../utils/Constants";

const WarrantyDataTable: React.FC = () => {
  const { tableState } = useContext(TableContext);

  return (
    <>
      <DataTable
        tHeadProps={THEADPROPS as ITHeadProps}
        tBodyProps={{cells: [ ...tableState.rows.map((tableState) => {
            delete tableState['id'];
            return { ...tableState };
          }) as IWarrantyData[]]
        }}
      />
    </>
  );
};

export default WarrantyDataTable;
