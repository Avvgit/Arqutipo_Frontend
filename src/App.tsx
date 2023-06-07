import './App.css'
import WarrantyDataTable from './components/pages/WarrantyDataTable';
import { TableProvider } from './context/TableProvider';

function App() {

  return (
    <TableProvider>
      <WarrantyDataTable />
    </TableProvider>
  )
}

export default App
