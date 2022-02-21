import styled from "styled-components";

const Row = styled.tr`
  padding-bottom: 42px;
`

const TableHeader = (): JSX.Element => (
  <Row>
    <th>WO ID</th>
    <th>Description</th>
    <th>Received date</th>
    <th>Assigned to</th>
    <th>Status</th>
    <th>Priority</th>
  </Row>
);

export default TableHeader;
