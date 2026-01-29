import React from 'react'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import loginImage from '../../../assets/loginImage.png'
import LeftAuthentication from '../../../Components/Layouts/LeftAuthentication'


interface LoginForm {
  email: string;
  password: string;
}

interface LoginErrors {
  email?: string;
  password?: string;
}

function Login() {

  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  // This is to validate the form input
  const validate = (): boolean => {
    const newErrors: LoginErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle change effect
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // form submission function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    console.log("Form submitted", form.email, form.password);
    // Fake auth simulation
    //storing the authenticated value in the local storage
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true")  
      localStorage.setItem(
        "authUser",
        JSON.stringify({ email: form.email })
      );
      console.log("Saved user:", localStorage.getItem("authUser"));
      setLoading(false);
      navigate("/dashboard");
      }, 1000);
  };


  return (
    <div className="auth_Container">
      <div className="auth_left">
        <LeftAuthentication
          authImage= {loginImage}
        />
      </div>
      <div className="auth_right">
        <div className="auth_card">
          <h1 className="auth_title">Welcome.</h1>
          <div className="auth_text">Enter details to login.</div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <input
                type={togglePassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <span className='showPassword' onClick={() => setTogglePassword(!togglePassword)}>SHOW</span>
              {errors.password && (
              <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="auth_actions">
              <Link to="/forgot-password" className="forgot">
              Forgot password?
              </Link>
            </div>


            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>

            <p className="auth_footer">
              Don’t have an account? <Link to="/register">Register</Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login