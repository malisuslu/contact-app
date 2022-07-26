import TableBodyRowCol from "./TableBodyRowCol";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { useState } from "react";
import Modal from "../form/Modal";
import toast from "react-hot-toast";

function TableBodyRow({ num, name, phone, gender, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState("");

  async function remove(e) {
    const id = e.target.id ? e.target.id : e.target.parentElement.id;
    const selectedDoc = doc(db, auth.currentUser.email, id);
    await deleteDoc(selectedDoc);
  }

  const notifyS = (msg) => {
    toast.success(msg);
  };

  const notifyE = (msg) => {
    toast.error(msg);
  };

  async function handleEdit(newInfo) {
    const id = currentId;
    const selectedDoc = doc(db, auth.currentUser.email, id);
    try {
      await updateDoc(selectedDoc, newInfo);
      setIsEditing(false);
      notifyS("Contact updated successfully");
    } catch (error) {
      notifyE(`Error updating contact: ${error}`);
    }
  }

  const closeModal = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing && <Modal onClick={closeModal} onEdit={handleEdit} />}
      <tr className="border-b border-white">
        <TableBodyRowCol children={num} />
        <TableBodyRowCol children={name} />
        <TableBodyRowCol children={phone} />
        <TableBodyRowCol children={gender} />
        <TableBodyRowCol>
          <MdOutlineDeleteForever
            className="text-red-500 text-2xl cursor-pointer hover:scale-150 z-20"
            id={id}
            onClick={remove}
          />
        </TableBodyRowCol>
        <TableBodyRowCol>
          <FiEdit
            className=" text-green-300 text-2xl cursor-pointer"
            id={id}
            onClick={() => {
              setIsEditing(true);
              setCurrentId(id);
            }}
          />
        </TableBodyRowCol>
      </tr>
    </>
  );
}

export default TableBodyRow;
