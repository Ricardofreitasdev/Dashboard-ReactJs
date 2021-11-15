
import React from "react";
import LayoutContext from "./LayoutContext";
import useStorage from "../utils/useStorage"


const LayoutProvider = ({children}) => {
const [sidebar, setSidebar] = useStorage('sidebar');


  return (
    <LayoutContext.Provider 
    value={{
      sidebar,
      setSidebar
    }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;