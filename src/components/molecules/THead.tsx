import { ITHeadProps } from "../../interfaces/InterfacesDataTable"
import { THeader } from "../atoms/THeader"


const THead = ( {columns}: ITHeadProps ) => {
  return (
    <thead>
      <tr>
        {columns.map( ( column, index ) => (
          <THeader key={index} column={column} />
        ))}
      </tr>
    </thead> 
  )
}

export default THead