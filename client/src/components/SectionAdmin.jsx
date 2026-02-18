import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

export const SectionAdmin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();
    console.log(data)
    if (data.success) {
      navigate("/da");  
    } else {
      navigate("/error"); 
    }
  }

  return (
    <div className="dad">
      <section className="section">
        <h1>מפקד תלונות</h1>
        <form action="password" onSubmit={login}>
          <label htmlFor="password">passeord:</label>
          <input type="password"  onChange={(e)=>setPassword(e.target.value)}/>
        <button  type="submit">כניסה לאדמין</button>
        </form>

      </section>
    </div>
  );
};
