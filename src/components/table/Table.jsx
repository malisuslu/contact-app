import TableBody from "./TableBody";
import TableHeading from "./TableHeading";

function Table() {
  return (
    <div className="md:ml-4 w-[90vw] md:max-w-[40vw]">
      <h1 className="w-full text-center text-2xl bg-slate-400 rounded-xl shadow-md mb-4">
        CONTACTS
      </h1>
      <div className="flex flex-col bg-slate-400 rounded-xl shadow-md md:px-8 px-4 md:max-h-[60vh] max-h-[50vh]">
        <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-hidden">
              <table className="min-w-full">
                <TableHeading />
                <TableBody />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
