import { ITCellProps } from "../../interfaces/InterfacesDataTable"


const TCell = ({value}: ITCellProps) => {
  return (
    <td > 
      {value}
    </td> 
  )
}

export default TCell