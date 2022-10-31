import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import style from "./Login.module.css";
import { useFormik } from "formik";
// import * as Yup from "yup";
import Logo from "../assets/Logo.png";
import ForgetPassword from "../Form/ForgetPassword/ForgetPassword";
import SignupForm from '../Form/SignupForm/SignupForm'
import { ToastContainer, toast } from 'react-toastify';
import VerifyForm from "../Form/ForgetPassword/VerifyForm";
import { NavLink } from "react-bootstrap";
import axios from 'axios';
import { LOGIN_API } from "../Api/Api";
import {useNavigate} from 'react-router-dom'
// import dots from '../assets/dots.png'
const Login = (props) => {
  const { show, onClose, open, setOpen } = props;
  const [forget, setForget] = useState(false);
  const [verify, setVerify] = useState(false);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      axios.post(LOGIN_API, values)
        .then((res) => {
          console.log(res);
          toast.success("Login Successfully");
          // navigate("/")
          localStorage.setItem('token', res.data.data.accessToken);
          // navigate("/");
          onClose()
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message === 'USER_NOT_FOUND') {
            toast.error('User not found');
          }
          else {
            toast.error('Invalid Passowrd');
          }
        })
    },
  });
  const forgetPassword = () => {
    setForget(true);
  };
  const toggleContent = () => {
    setOpen(true);
  };
  return (
    <div >
      <div className={`container ${style.loginContainer}`}>
        <ToastContainer />
        <Modal className="loginModal" show={show} onHide={onClose}>
          <Modal.Body className={style.modalBody}>
            <div className="row m-0 p-0">
              {!open ? (
                <div className={`col-md-6 p-2`}>
                  {forget ?
                    (
                      <div className={style.content}>
                        <div className={style.logoContainer}>
                          <img alt="logo" src={Logo} className={style.logo} width="30px" height="30px" /> <p className={style.logoText}>NFT Generator</p>
                        </div>
                        <div className={style.leftHeading}>
                          <h3>Forget Password</h3>
                          <p>Please enter your registered email address and we’ll send you a verification code to reset your password</p>
                        </div>
                        <div className={style.FormContainer}>
                          {!verify ?
                            <ForgetPassword verify={verify} setVerify={setVerify} />
                            : <VerifyForm />}
                        </div>
                        <div className={`row ${style.bottomRow}`}>
                          {!open &&
                            <>
                              {!verify ?
                                <>
                                  <div className={`col-md-6 col-sm-6 ${style.bottomLogin}`} onClick={() => setForget(false)} >Login</div>
                                  <div className={`col-md-6 col-sm-6 ${style.CreateAccount}`} onClick={toggleContent}>Create an Account</div>
                                </>
                                :
                                <>
                                  <div className={`col-md-6 col-sm-6 ${style.bottomLogin}`} onClick={() => setForget(false)} >Login</div>
                                  <div className={`col-md-6 col-sm-6 ${style.CreateAccount}`} onClick={toggleContent}>Resend Code</div>
                                </>
                              }
                            </>
                          }
                        </div>
                      </div>

                    )
                    : (
                      <div className={`col-md-6  p-0  ${style.toggleRightContent}`}>
                        <div className={style.content}>
                          <div className={style.logoContainer}>
                            <img
                              alt="logo"
                              src={Logo}
                              className={style.logo}
                              width="30px"
                              height="30px"
                            />{" "}
                            <p className={style.logoText}>NFT Generator</p>
                          </div>

                          <div className={style.leftHeading}>
                            <h3>Welcome back to login Please login your account</h3>
                          </div>
                          <div className={style.FormContainer}>
                            <form onSubmit={formik.handleSubmit} className={style.loginForm}>
                              <label className={style.label}>Email Address</label>
                              <div>
                                <input
                                  autoComplete="off"
                                  type="email"
                                  name="email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.email}
                                  className='form-control'
                                />
                                {formik.touched.email && formik.errors.email ? (
                                  <div className={style.error}>
                                    {formik.errors.email}
                                  </div>
                                ) : null}
                              </div>
                              <label className={style.label}>Password</label>
                              <div>
                                <input
                                  autoComplete="off"
                                  type="password"
                                  name="password"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.password}
                                  className='form-control'
                                />
                                {formik.touched.password && formik.errors.password ? (
                                  <div className={style.error}>
                                    {formik.errors.password}
                                  </div>
                                ) : null}
                              </div>
                              <div className={`row p-0  ${style.formTextRow}`}>
                                <div
                                  className={`col-md-4  col-sm-6 ${style.formColumn}`}
                                >
                                  <div className="d-flex align-items-center">
                                    <input
                                      defaultChecked={true}
                                      className={`me-2 {${style.checkbox}}`}
                                      type="checkbox"
                                    />
                                    <label className={style.formText}>Remember me</label>
                                  </div>
                                </div>
                                <div
                                  className={`col-md-6  col-sm-6 ${style.formColumn}`}
                                >
                                  <NavLink
                                    onClick={forgetPassword}
                                    className={style.formText}
                                  >
                                    {" "}
                                    Forget your password?
                                  </NavLink>
                                </div>
                              </div>
                              <button type="submit" className={style.login}>
                                Login
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <div className={`col-md-6  p-0`}>
                  <div className={style.content}>
                    <div className={style.logoContainer}>
                      <img alt="logo" src={Logo} width="30px" height="30px" />{" "}
                      <p className={style.logoText}>NFT Generator</p>
                    </div>
                    <div className={style.signupHeading}>
                      <h3>Welcome back to Sign Up Please SignUp your account</h3>
                    </div>
                    <div className={style.FormContainer}>
                      <SignupForm />
                    </div>
                  </div>
                </div>
              )}
              <div id="rightContent" className={`col-md-6 ${style.rightContent}`}>
                <div className={style.rightHeaderContent}>
                  <h3 className={style.rightContentHeading}>Glad to see you</h3>

                  {!open ? (
                    <>
                      <h4 className={style.rightContentText}>
                        Don't have an account ? Create your account,it takes less
                        than a minute
                      </h4>
                      <button onClick={toggleContent} className={style.signup}>
                        Signup
                      </button>
                    </>
                  ) : (
                    <> </>
                  )}
                </div>


              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
