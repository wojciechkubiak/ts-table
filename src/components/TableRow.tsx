import { Assigned, WorkData } from "../models/Work";

interface ITableRow {
  workData: WorkData;
}

const TableRow = ({ workData }: ITableRow): JSX.Element => {
  const handleAssignedData = (assigned: Assigned[]) => {
    const records: string[] = [];

    assigned.forEach((data) => {
      records.push(`${data.personName} - ${data.status}`);
    });

    return records.join(" / ");
  };

  return (
    <tr>
      <td>{workData.workOrderId}</td>
      <td>{workData.description}</td>
      <td>{workData.receivedData}</td>
      <td>{handleAssignedData(workData.assignedTo)}</td>
      <td>{workData.status}</td>
      <td>{workData.priority}</td>
    </tr>
  );
};

export default TableRow;
