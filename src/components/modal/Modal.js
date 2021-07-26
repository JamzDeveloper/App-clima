import React from "react";
import { useHistory } from "react-router-dom";
import "./Modal.css";

const Modal = ({ openModal, handleOpenModal, data, setData }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/clima");
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
   
  };

  return (
    <article
      className={`modal ${openModal && "is-open"} `}
      onClick={handleOpenModal}
    >
      <div className="modal-container" onClick={handleModalContainerClick}>
        <div className="modal--container-close">
          <button className="modal-close" onClick={handleOpenModal}>
            X
          </button>
        </div>
        <div>
          <form className="modal--container-input" onSubmit={handleSubmit}>
            <div className="input-data">
              <input
                type="text"
                name="city"
                onChange={handleChange}
                required
                value={data.city}
                
              />
              <label>Ciudad</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="country"
                onChange={handleChange}
                value={data.country}
                required
              />
              <label>Pais</label>
            </div>
            <div className="input-data input-btn">
              <button className="btn-form" type="submit" >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};
export default Modal;
