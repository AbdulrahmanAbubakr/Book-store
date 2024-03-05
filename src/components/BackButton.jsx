/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
function BackButton({ destination = "/" }) {
  return (
    <Link to={destination} className="text-sky-950 px-4 py-1 rounded-lg w-fit">
      <BsArrowLeftCircleFill className="text-2xl" />
    </Link>
  );
}

export default BackButton;
