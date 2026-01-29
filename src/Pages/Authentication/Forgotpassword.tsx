import { useState } from "react";
import { Link } from "react-router-dom";

import loginImage from '../../assets/loginImage.png'
import LeftAuthentication from "../../Components/Layouts/LeftAuthentication";


interface ForgotPasswordForm {
  email: string;
}

interface ForgotPasswordErrors {
  email?: string;
}

const ForgotPassword = () => {
  const [form, setForm] = useState<ForgotPasswordForm>({ email: "" });
  const [errors, setErrors] = useState<ForgotPasswordErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: ForgotPasswordErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ email: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // Fake API call simulation
    setTimeout(() => {
      localStorage.setItem("resetEmail", form.email);
      setLoading(false);
      setSuccess(true);
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
                <h1 className="auth_title">Forgot Password</h1>
                <p className="auth_text">
                Enter your email and we’ll send you reset instructions
                </p>

                {!success ? (
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <span className="error">{errors.email}</span>
                    )}
                    </div>

                    <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>
                ) : (
                <div className="auth_success">
                    <p>
                    If an account exists for <strong>{form.email}</strong>, you’ll
                    receive password reset instructions shortly.
                    </p>
                </div>
                )}

                <p className="auth_footer">
                <Link to="/">Back to Login</Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default ForgotPassword;

