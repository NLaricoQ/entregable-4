import "./Header.css";
const Header = ({ onCreate }) => {
  return (
    <header className="header">
      <h1 className="header_title">USERS</h1>
      <button className="header_btn" onClick={() => onCreate()}>
        CREATE NEW USER
      </button>
    </header>
  );
};

export default Header;
