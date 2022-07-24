import TableBodyRow from "./TableBodyRow";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function TableBody() {
  const [contacts, setContacts] = useState([]);
  const [parent] = useAutoAnimate(/* optional config */);

  const notifyS = (msg) => {
    toast.success(msg);
  };

  const notifyE = (msg) => {
    toast.error(msg);
  };

  const getContactsOnSnapshot = async () => {
    const q = query(collection(db, "contacts"), orderBy("timestamp", "asc"));
    try {
      onSnapshot(q, (snapShot) => {
        const contacts = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contacts);
      });
    } catch (e) {
      notifyE(`Error fetching contacts: ${e}`);
    }
  };

  useEffect(() => {
    getContactsOnSnapshot();
  }, []);

  return (
    <tbody className="border-b border-white" ref={parent}>
      {contacts.map((contact, index) => (
        <TableBodyRow key={contact.id} {...contact} num={index + 1} />
      ))}
    </tbody>
  );
}

export default TableBody;
