import TableBody from "./TableBody";
import TableHeading from "./TableHeading";

function Table() {
  return (
    <div className="md:max-h-[80vh] max-h-[44vh] md:max-w-[40vw] max-w-[90vw] rounded-lg bg-slate-400 md:px-10 px-4 overflow-x-hidden overflow-y-auto scrollbar">
      <table className="table-fixed w-full border-separate border-spacing-0 break-all">
        <TableHeading />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
