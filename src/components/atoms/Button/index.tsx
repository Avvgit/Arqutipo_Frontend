import React, { useContext } from 'react';
import { TableContext } from '../../../context/TableContext'


const Button: React.FC = () => {
  const { state, addRow } useContext(TableContext);

  const handleClick = () => {
    const newRow = { name: 'New Row'  };
    addRow(newRow);
  };

  return (
    <button onClick={handleClick}>Add Row</button>
  )
}