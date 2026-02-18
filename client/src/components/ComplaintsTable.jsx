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
      <th>Category</th>
      <th>Message</th>
      <th>Date</th>
    </tr>
  </thead>

  <tbody>
    {listComp.map((complaint, i) => (
      <tr key={i}>
        <td>{complaint.category}</td>
        <td>{complaint.message}</td>
        <td>{complaint.date}</td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  );
};
