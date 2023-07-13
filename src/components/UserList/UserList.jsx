import "./UserList.css";
const UserList = ({ users, onEditUser, onDeleteUser }) => {
  if (!users.length) return <p>Without users</p>;
  return (
    <ul className="user-ul">
      {users.map((user) => (
        <li key={user.id} className="user-li">
          <article className="user-article">
            <div className="user-data">
              <h2 className="user-name">
                {user.first_name + " " + user.last_name}
              </h2>
              <h3 className="user-title">EMAIL</h3>
              <p className="user-value">{user.email}</p>
              <h3 className="user-title">BIRTHDAY</h3>
              <p className="user-value">
                <i className="bx bx-cake"></i>
                {user.birthday}
              </p>
            </div>
            <div className="user-btn-container">
              <button
                onClick={() => onDeleteUser(user.id)}
                className="delete-user-btn"
              >
                <i className="bx bx-trash"></i>
              </button>
              <button
                onClick={() => onEditUser(user)}
                className="edit-user-btn"
              >
                <i className="bx bx-edit-alt"></i>
              </button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
