import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Student from "./pages/Student";
import Admin from "./pages/Admin";
import Warden from "./pages/Warden";
import Navbar from "./component/navbar";

const initialMenu = {
  breakfast: "Idli, Sambar",
  lunch: "Rice, Sambar, Poriyal",
  snacks: "Sundal, Tea",
  dinner: "Chapati, Kurma"
};

function Protected({ user, role, children }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== role) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  return children;
}

function App() {
  const [user, setUser] = useState(null);
  const [menu, setMenu] = useState(initialMenu);
  const [feedback, setFeedback] = useState([]);

  function login(name, role) {
    setUser({ name, role });
  }

  function logout() {
    setUser(null);
  }

  return (
    <>
      {user && <Navbar user={user} onLogout={logout} />}

      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to={`/${user.role}`} replace /> : <Login onLogin={login} />
          }
        />

        <Route
          path="/student"
          element={
            <Protected user={user} role="student">
              <Student
                user={user}
                menu={menu}
                feedback={feedback}
                setFeedback={setFeedback}
              />
            </Protected>
          }
        />

        <Route
          path="/admin"
          element={
            <Protected user={user} role="admin">
              <Admin
                menu={menu}
                setMenu={setMenu}
                feedback={feedback}
              />
            </Protected>
          }
        />

        <Route
          path="/warden"
          element={
            <Protected user={user} role="warden">
              <Warden feedback={feedback} />
            </Protected>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;