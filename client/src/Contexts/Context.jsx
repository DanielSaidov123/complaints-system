import { createContext, useState } from "react";  
import { getAll } from "../api/complaintsApi";

export const ComplaintList = createContext();

export  function ComplaintListProvider({ children }) {
  const [token, settoken] = useState("");
  const [listComp , setlistComp] = useState([])
  return (
    <ComplaintList.Provider value={{ token, settoken ,listComp ,setlistComp}}>
      {children}
    </ComplaintList.Provider>
  );
}
