import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from '../../assets/loginImage.png'
import LeftAuthentication from "../../Components/Layouts/LeftAuthentication";

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface RegisterErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<RegisterErrors>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: RegisterErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

      users.push({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        createdAt: new Date().toISOString(),
      });

      localStorage.setItem("registeredUsers", JSON.stringify(users));

      setLoading(false);
      navigate("/");
    }, 800);
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
            <h1 className="auth_title">Create Account</h1>
            <p className="auth_text">Register to access the dashboard</p>

            <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
                <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                />
                {errors.firstName && (
                <span className="error">{errors.firstName}</span>
                )}
            </div>

               <div className="form-group">
                <input
                    type="text"
                    name="firstName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                />
                {errors.lastName && (
                <span className="error">{errors.lastName}</span>
                )}
            </div>

            <div className="form-group">
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                />
                {errors.password && (
                <span className="error">{errors.password}</span>
                )}
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Creating account..." : "Register"}
            </button>
            </form>

            <p className="auth_footer">
            Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
        </div>
    </div>
  );
};

export default Register;

