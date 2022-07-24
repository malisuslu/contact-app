function TableHeadingCol({ children }) {
  return (
    <th
      scope="col"
      className="text-sm font-medium text-white md:px-6 py-4 text-left"
    >
      {children}
    </th>
  );
}

export default TableHeadingCol;
