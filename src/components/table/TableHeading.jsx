import TableHeadingCol from "./TableHeadingCol";
function TableHeading() {
  return (
    <thead className="border-b border-white">
      <tr>
        <TableHeadingCol>#</TableHeadingCol>
        <TableHeadingCol>Username</TableHeadingCol>
        <TableHeadingCol>Phone</TableHeadingCol>
        <TableHeadingCol>Gender</TableHeadingCol>
        <TableHeadingCol>Delete</TableHeadingCol>
        <TableHeadingCol>Edit</TableHeadingCol>
      </tr>
    </thead>
  );
}

export default TableHeading;
