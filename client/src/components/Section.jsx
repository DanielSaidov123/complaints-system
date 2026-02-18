import React from "react";
import { NavLink } from "react-router";

export const Section = () => {
  return (
    <div className="dad">
      <section className="section">
        <h1>תיבת תלונות אנננימיות בבסיס צבאי</h1>
        <p>שלחו תלונה בצורה אנונימית: </p>
        <NavLink to="/Complaints" className="link"><button>שליחת תלונה</button></NavLink>
        
      </section>
    </div>
  );
};
