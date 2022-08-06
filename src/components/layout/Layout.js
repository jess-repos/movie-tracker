import React from "react";
import DataProvider from "../../context/DataProvider";
import Search from "../ui/Portal";

const Layout = ({ children }) => {
  return (
    <>
      <DataProvider>{children}</DataProvider>
    </>
  );
};

export default Layout;
