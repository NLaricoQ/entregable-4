import { useForm } from "react-hook-form";
import "./UserForm.css";

const UserForm = ({ onClose, onSend, initialData }) => {
  const { register, handleSubmit } = useForm({ defaultValues: initialData });
  const onSubmit = (data) => {
    if (initialData) onSend({ id: initialData.id, ...data });
    else onSend(data);
  };
  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="user-form-title">
        {initialData ? "Editar Usuario" : "Create User"}
      </h2>
      <button type="button" className="close-modal-button" onClick={onClose}>
        X
      </button>
      <div className="input-container">
        <div className="user-form-input-container">
          <label className="user-form-label" htmlFor="nameId">
            Name
          </label>
          <input
            type="text"
            placeholder="Example: Nelson"
            id="nameId"
            {...register("first_name")}
          ></input>
        </div>
        <div className="user-form-input-container">
          <label className="user-form-label" htmlFor="lastNameId">
            Lastname
          </label>
          <input
            type="text"
            placeholder="Example: Larico"
            id="lastNameId"
            {...register("last_name")}
          ></input>
        </div>
        <div className="user-form-input-container">
          <label className="user-form-label" htmlFor="emailId">
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            id="emailId"
            {...register("email")}
          ></input>
        </div>
        <div className="user-form-input-container">
          <label className="user-form-label" htmlFor="passwordId">
            Password
          </label>
          <input
            type="password"
            id="passwordId"
            placeholder="xxxxx"
            {...register("password")}
          ></input>
        </div>
        <div className="user-form-input-container">
          <label className="user-form-label" htmlFor="birthdayId">
            Birthday
          </label>
          <input type="date" id="birthdayId" {...register("birthday")}></input>
        </div>
      </div>
      <button className="user-form-submit-btn" type="submit">
        {initialData ? "Guardar cambios" : "Crear Nuevo Usuario"}
      </button>
    </form>
  );
};

export default UserForm;
