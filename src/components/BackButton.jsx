import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="backBtn" onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} size="xl" />
    </button>
  );
};

export default BackButton;
