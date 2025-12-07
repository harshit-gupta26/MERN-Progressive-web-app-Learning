import React from "react";
import { FaGoogle, FaGithub, FaMicrosoft, FaEnvelope } from "react-icons/fa";
import "./Auth.css";

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h1>Join <span>EduLearn</span></h1>
          <p>Create your free account</p>

          <div className="social-login-box">
            <p>Sign up using your preferred platform</p>
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
            By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </div>

        {/* <div className="auth-right">
          <img src="/images/signup-banner.jpg" alt="Signup Illustration" />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
