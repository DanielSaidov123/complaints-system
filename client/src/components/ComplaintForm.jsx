import React from "react";
import { useState } from "react";
import { createComplain } from "../api/complaintsApi";
import { useNavigate } from "react-router";

export const ComplaintForm = () => {
    const [category , setselect] = useState("אוכל")
    const [message , settext] = useState("")
  const navigate = useNavigate();

    async function Submitform(e) {
        e.preventDefault();
       const res = await createComplain(category ,message)
        if (res.ok) {
            alert( "תלונה נשמרה בהצלחה")
        } else{
             navigate("/error")
        }
    }
  return (
    <div className="dad">
      <form action="" className="form" onSubmit={Submitform}>
        <h1>שליחת תלונה אנונימית</h1>
        <label htmlFor=""  >תחום התלונה</label>
        <select name="complaint" className="spase" onChange={(e)=>setselect(e.target.value)}>
          <option value="אוכל">אוכל</option>
          <option value="ציוד">ציוד</option>
          <option value="פקודות">פקודות</option>
          <option value="אחר">אחר</option>
        </select>
        <label htmlFor=""  >תוכן התלונה</label>
        <textarea name="complaint" className="spase" onChange={(e)=>settext(e.target.value)}></textarea>
        <button type="submit">שליחת הודעה</button>
      </form>
    </div>
  );
};
