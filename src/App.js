import Form from "./components/form/Form";
import Table from "./components/table/Table";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-screen pt-12 flex flex-col justify-center items-center md:items-start md:flex-row">
      <Toaster />
      <Form />
      <Table />
    </div>
  );
}

export default App;
