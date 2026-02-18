import React, { useContext, useEffect } from "react";
import { ComplaintList } from "../Contexts/Context";
import { getAll } from "../api/complaintsApi";

export const ComplaintsTable = () => {
  const { listComp, setlistComp, token } = useContext(ComplaintList);

  useEffect(() => {
    console.log(token)
    const fetchData = async () => {
      try {
        const list = await getAll(token);
        setlistComp(list);
        console.log("SERVER RETURN:", list);
      } catch (err) {
        console.error(err);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <>
      <table>
      <thead>
        <tr>
          <th>img</th>
          <th>name</th>
          <th>attacksCount</th>
          <th>organization</th>
          <th>summary</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((s,i) => (
          <tr key={i}> 
            <td>
              <img src={s.imageUrl ? s.imageUrl:"https://picsum.photos/400/400?random=3"} alt="dsa" />
            </td>
            <td>{s.name}</td>
            <td>{s.attacksCount}</td>
            <td>{s.organization}</td>
            <td>{s.status}</td>
            <td>{s.relationToIsraelSummary}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};
