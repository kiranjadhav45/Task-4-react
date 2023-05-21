import React from "react";
import Navbar from "../components/common/Navbar";
import CRUD from "../components/items/CRUD";
import Footer from "../components/common/Footer";

const Crud = () => {
  return (
    <>
      <Navbar />
      <CRUD />
      <Footer />
    </>
  );
};

export default Crud;
