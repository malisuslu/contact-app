import TableBodyRow from "./TableBodyRow";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../../firebase-config";
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
    const q = query(
      collection(db, auth.currentUser.email),
      orderBy("timestamp", "asc")
    );
    onSnapshot(q, (snapshot) => {
      const contacts = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setContacts(contacts);
    });
  };

  getContactsOnSnapshot();

  return (
    <tbody className="border-b border-white" ref={parent}>
      {contacts.map((contact, index) => (
        <TableBodyRow key={contact.id} {...contact} num={index + 1} />
      ))}
    </tbody>
  );
}

export default TableBody;
