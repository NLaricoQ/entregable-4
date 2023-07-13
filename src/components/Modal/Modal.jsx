import "./Modal.css";

const Modal = ({ children, isVisible }) => {
  if (!isVisible) return null;
  return <div className="modal">{children}</div>;
};

export default Modal;
