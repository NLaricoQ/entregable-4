import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { getAllUsers } from "./services/getAllUsers";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";
import UserForm from "./components/userForm/userForm";
import { createUser } from "./services/createUser";
import { updateUser } from "./services/updateUser";
import { deleteUser } from "./services/deleteUser";

function App() {
  const [users, setUsers] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);

  const loadUsers = async () => {
    const usersData = await getAllUsers();
    setUsers(usersData);
  };

  const handleCreate = () => {
    setEditingUserData(null);
    setIsVisibleModal(true);
  };
  const handleCloseModal = () => {
    setIsVisibleModal(false);
  };
  const handleSend = async (data) => {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);

    await loadUsers();
    setIsVisibleModal(false);
  };
  const handleEdit = (dataUser) => {
    setIsVisibleModal(true);
    setEditingUserData(dataUser);
  };

  const handleDeleteUser = async (data) => {
    await deleteUser(data);
    await loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Header onCreate={handleCreate} />
      <UserList
        users={users}
        onEditUser={handleEdit}
        onDeleteUser={handleDeleteUser}
      />
      <Modal isVisible={isVisibleModal}>
        <UserForm
          onClose={handleCloseModal}
          onSend={handleSend}
          initialData={editingUserData}
        />
      </Modal>
    </>
  );
}

export default App;
