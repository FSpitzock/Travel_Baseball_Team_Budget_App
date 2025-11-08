import React from "react";
import Navigation from "../Layout/Navigation";
import OutlawLogo from "../../assets/OutlawLogo.png";

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      {/* Left Section: Logo + Title */}
      <div style={styles.left}>
        <img
          src={OutlawLogo}
          alt="Oviedo Outlaw Logo"
          style={styles.logo}
        />

        <h2 style={styles.title}>Travel Baseball Team Budget</h2>
      </div>

      {/* Right Section: Navigation */}
      <Navigation />
    </header>
  );
};

export default Header;

/* ============================
   ✅ Inline Style Objects
============================ */
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    position: "sticky" as const,
    top: 0,
    zIndex: 10,
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  logo: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },

  title: {
    fontSize: "1.8rem",
    fontWeight: 700,
    margin: 0,
    color: "#222",
  },
};
