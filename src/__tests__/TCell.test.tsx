import { render } from "@testing-library/react";
import TCell from "../components/atoms/TCell";
import { ITCellProps } from "../interfaces/InterfacesDataTable";

type TValue = {
  testName: string,
  cell: ITCellProps,
  assert?: (cellElement: HTMLElement) => void
}

const values: TValue[] = [
  {
    testName: "Should render the given string",
    cell: {value: "String"},
    assert: (cellElement) => {
      expect(cellElement).toHaveTextContent("String");
    }
  },
  {
    testName: "Should render the given number",
    cell: {value: 1},
  },
  {
    testName: "Should render the given boolean",
    cell: {value: true},
  },
  {
    testName: "Should render the given Element",
    cell: {value: <div>Element</div>},
    assert: (cellElement) => {
      expect(cellElement).toContainHTML("<div>Element</div>");
    }
  },
  {
    testName: "Should render the given undefined",
    cell: {value: undefined},
  },
  {
    testName: "Should render the given null",
    cell: {value: null},
  },
]

describe('TCell', () => {
  values.map( ({testName, cell, assert}:TValue ) => {
    const {value} = cell;
    test(testName, () => {
      const {container} = render(<TCell value={value} />);
      const cellElement = container.querySelector('td') as HTMLElement;

      if (assert !== undefined) {
        assert(cellElement);
      }
      expect(cellElement).toBeInTheDocument();
    })
  })
})