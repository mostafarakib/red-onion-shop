import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    signInUsingFacebook,
    signInUsingEmailAndPassword,
    emailChangeHandler,
    passwordChangeHandler,
    resetPassword,
    error,
    setError,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const redirectURL = location.state?.from || "/";

  const googleLoginHandler = () => {
    signInUsingGoogle()
      .then((result) => {
        navigate(redirectURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const facebookLoginHandler = () => {
    signInUsingFacebook()
      .then((result) => {
        navigate(redirectURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const emailLoginHandler = () => {
    signInUsingEmailAndPassword()
      .then(() => {
        setError("");
        navigate(redirectURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <Container className="p-5">
        <Row>
          <Col>
            <div className="login_box mx-auto">
              <img
                className="login_box-img pt-3"
                src="images/logo.png"
                alt=""
              />

              <div className="px-5 py-4">
                <form
                  className="login__form d-flex flex-column"
                  onSubmit={emailLoginHandler}
                >
                  <input
                    type="email"
                    placeholder="E-mail"
                    onBlur={emailChangeHandler}
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    onBlur={passwordChangeHandler}
                  />
                  {error && (
                    <div className="text-danger text-start">{error}</div>
                  )}
                  <br />
                  <button
                    className="btn-regular align-self-center ps-5 pe-5"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
                <br />
                <div className="text-start">
                  Forgot password?{" "}
                  <a href="#" onClick={resetPassword}>
                    Click here to reset password
                  </a>
                </div>
                <p className="text-start">
                  New to E-School? <Link to="/register"> Create account?</Link>
                </p>

                <hr />
                <div className="text-center">Or connect with</div>
                <br />
                <div className="d-flex justify-content-center">
                  <button
                    onClick={googleLoginHandler}
                    className="me-2 btn-regular btn-google"
                  >
                    Google
                  </button>
                  <button
                    onClick={facebookLoginHandler}
                    className="btn-regular btn-facebook"
                  >
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
