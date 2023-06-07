import { ITBodyProps, ITHeadProps } from "../../interfaces/InterfacesDataTable"
import TBody from "../molecules/TBody"
import THead from "../molecules/THead"

type DataTableProps = {
  tHeadProps: ITHeadProps,
  tBodyProps: ITBodyProps
}

export const DataTable = ({ tHeadProps, tBodyProps }: DataTableProps) => {
  return (
    <table> 
      <THead {...tHeadProps}/>
      <TBody {...tBodyProps}>
      </TBody>
    </table>
  )
}
