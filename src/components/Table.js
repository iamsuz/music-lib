import { useMemo } from "react";
import { COLUMNS } from "./Columns";
import { useTable } from "react-table";

function Table(props) {
  console.log(props);
  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable({ columns, data: props.data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
