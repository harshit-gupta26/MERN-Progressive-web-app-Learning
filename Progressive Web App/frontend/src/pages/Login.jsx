import React from "react";
import { FaGoogle, FaGithub, FaMicrosoft, FaEnvelope } from "react-icons/fa";
import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Left Side (Form) */}
        <div className="auth-left">
          <h1>Welcome to <span>EduLearn</span></h1>
          <p>Login to your account</p>

          <div className="social-login-box">
            <p>Choose your preferred social account for instant access</p>
            <button className="social-btn google">
              <FaGoogle /> Continue with Google
            </button>
            <button className="social-btn github">
              <FaGithub /> Continue with GitHub
            </button>
            <button className="social-btn microsoft">
              <FaMicrosoft /> Continue with Microsoft
            </button>
          </div>

          <div className="or-divider">OR</div>

          <button className="email-btn">
            <FaEnvelope /> Continue via Email
          </button>

          <p className="terms-text">
            By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </div>

        {/* Right Side (Image) */}
        {/* <div className="auth-right">
          <img src="/images/login-banner.jpg" alt="Login Illustration" />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
