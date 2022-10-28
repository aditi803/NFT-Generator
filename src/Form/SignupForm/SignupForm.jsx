import React from 'react'
import { useFormik } from "formik";
import style from "./SignupForm.module.css";
import * as Yup from "yup";
import axios from 'axios';
import { SIGN_UP_API } from '../../Api/Api'
import { toastContainer, toast, ToastContainer } from 'react-toastify'

const SignForm = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required('required'),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const onSubmit = (values) => {
    console.log(values);
    axios.post(SIGN_UP_API, values)
      .then((res) => {
        console.log(res);
        toast.success("SignUp Succesfully");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.message === 'EMAIL_ALREADY_TAKEN') {
          toast.error('Email already taken');
        }
      })
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label className={style.signupLabel}>UserName</label>
        <div>
          <input
            autoComplete="off"
            type="text"
            {...formik.getFieldProps("userName")}
            className={style.inputField}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className={style.error}>
              {formik.errors.userName}
            </div>
          ) : null}
        </div>
        <label className={style.signupLabel}>Email Address</label>
        <div>
          <input
            autoComplete="off"
            type="email"
            {...formik.getFieldProps("email")}
            className={style.inputField}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={style.error}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <label className={style.signupLabel}>Password</label>
        <div>
          <input
            autoComplete="off"
            type="password"
            className={style.inputField}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={style.error}>
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className={`row p-0  ${style.formTextRow}`}>
          <div
            className={` d-flex col-md-12} ${style.FormColumn}`}
          >
            <input
              defaultChecked={true}
              className={style.checkbox}
              type="checkbox"
            />
            <label className={style.SignupText}>
              By Signing up you agree to the Terms and Condition &
              privacy Policy
            </label>
          </div>
        </div>
        <button type="Submit" className={style.signup}>
          SignUp
        </button>
      </form>
    </>
  )
}

export default SignForm
