import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    onLogin(name.trim(), role);
  }

  return (
    <div className="login-page">
      <form className="card login-card" onSubmit={handleSubmit}>
        <h1>Hostel Mess</h1>
        <p>Food Menu & Feedback System</p>

        <label>Your Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label>Login As</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="warden">Warden</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;