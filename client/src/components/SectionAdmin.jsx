import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ComplaintList } from "../Contexts/Context";

export const SectionAdmin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token, settoken } = useContext(ComplaintList);
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

    if (data.success) {
      settoken(data.token);
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
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">כניסה לאדמין</button>
        </form>
      </section>
    </div>
  );
};
