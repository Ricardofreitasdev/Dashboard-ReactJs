
import React,{ useState } from "react";
import LayoutContext from "./LayoutContext";

const LayoutProvider = ({children}) => {
const [sidebar, setSidebar] = useState(false);
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