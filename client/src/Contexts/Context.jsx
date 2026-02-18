import { createContext, useState, useEffect } from "react";  

export const ComplaintList = createContext();

export function ComplaintListProvider({ children }) {
  const [token, settoken] = useState(() => {
    return localStorage.getItem("token") || "";
  });
  
  const [listComp, setlistComp] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("token", token);
  // }, [token]);

  return (
    <ComplaintList.Provider value={{ token, settoken, listComp, setlistComp }}>
      {children}
    </ComplaintList.Provider>
  );
}
