import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";
import UserDetail from "./Pages/UserDetail/UserDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ForgotPassword from "./Pages/Authentication/Forgotpassword";
import Register from "./Pages/Authentication/Register";
import Guarantor from "./Pages/Guarantor/Guarantor";
import Loans from "./Pages/Loans/Loans";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/guarantors" element={<Guarantor />} />
        <Route path="/loans" element={<Loans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
