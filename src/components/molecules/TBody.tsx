import { ITBodyProps } from "../../interfaces/InterfacesDataTable";

const TBody = ({ cells }: ITBodyProps) => {
  return (
    <tbody>
      {cells.map((cell, i) => (
        <tr key={i}>
          {Object.keys(cell).map((key: string) => {
            type cellType = keyof typeof cell;
            return <td key={key}>{cell[key as cellType]}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
