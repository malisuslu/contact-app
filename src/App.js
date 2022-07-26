import Form from "./components/form/Form";
import Table from "./components/table/Table";
import NavIcon from "./components/NavIcon";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Login from "./components/form/Login";
import Register from "./components/form/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isRegistered, setIsRegistered] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [isLoggedIn]);

  if (isLoggedIn === undefined) {
    return (
      <div className="text-5xl text-green-500 flex justify-center items-center mt-56">
        Directing...
      </div>
    );
  }

  return (
    <>
      {isLoggedIn && <NavIcon />}
      <div className="w-screen pt-20 flex flex-col justify-center items-center md:items-start md:flex-row">
        <Toaster />
        {isLoggedIn ? (
          <>
            <Form />
            <Table />
          </>
        ) : isRegistered ? (
          <Login setNotRegistered={() => setIsRegistered(false)} />
        ) : (
          <Register setRegistered={() => setIsRegistered(true)} />
        )}
      </div>
    </>
  );
}

export default App;
