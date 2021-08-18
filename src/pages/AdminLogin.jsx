import React from "react";
import Header from "../components/Header";

export default function AdminLogin() {
  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="admin-login">
          <h2>Admin Login</h2>
        </div>
        <form>
          <input type="text" name="username" placeholder="username"></input>
          <input type="text" name="password" placeholder="password"></input>
          <input type="submit" name="login" placeholder="submit"></input>
        </form>
      </div>
    </div>
  );
}
