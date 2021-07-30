import React, { useState } from "react";
import Modal from "../components/modal/Modal.js";
import { useHistory } from "react-router-dom";
const WearherFrom = ({ data, setData }) => {
  /* const initialState = {
    latitude: "",
    longitude: "",
  };*/
  //  const [dataLocation, setDataLocation] = useState(initialState);

  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();
  /*
  const handleLocation = () => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("este navegador no soporta la geolocalizacion");
      }
    }

    function showPosition(position) {
      console.log(position);
      setDataLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }
    getLocation();
    console.log(dataLocation);
  };

  */
  const handleLocation = () => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("este navegador no soporta la geolocalizacion");
      }
    }

    function showPosition(position) {
      console.log(position);

      setData({
        ...data,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }
    getLocation();
    history.push("/clima");
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <button className="btn geo" onClick={handleLocation}>
        Obtener ubicación
      </button>
      <button className="btn" onClick={handleModal}>
        Ingresar datos
      </button>
      {openModal && (
        <Modal
          openModal={openModal}
          handleOpenModal={handleModal}
          data={data}
          setData={setData}
        />
      )}
    </>
  );
};

export default WearherFrom;
