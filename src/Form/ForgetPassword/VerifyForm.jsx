import React from 'react'
import style from './ForgetPassword.module.css'
import { useFormik } from "formik";
import * as Yup from "yup";
const VerifyForm = () => {
    const formik = useFormik({
    initialValues: {
        vCode: "",
        newPassword: "",
      },
      validationSchema: Yup.object({
        vCode: Yup.string().required("Required"),
        newPassword: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div>
        <div className={style.FormContainer}>
                    <form onSubmit={formik.handleSubmit}>
                      <label className={style.label}>Verification Code</label>
                      <div>
                        <input
                          autoComplete="off"
                          type="text"
                          name="vCode"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.vCode}
                          className={style.inputField}
                        />
                        {formik.touched.vCode && formik.errors.vCode ? (
                          <div className={style.error}>
                            {formik.errors.vCode}
                          </div>
                        ) : null}
                      </div>
                      <label className={style.label}> New Password</label>
                      <div>
                        <input
                          autoComplete="off"
                          type="password"
                          name="newPassword"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.newPassword}
                          className={style.inputField}
                        />
                        {formik.touched.newPassword && formik.errors.newPassword ? (
                          <div className={style.error}>
                            {formik.errors.newPassword}
                          </div>
                        ) : null}
                      </div>
                      <button type="submit" className={style.next}>
                        next
                      </button>
                    </form>
                  </div>
    </div>
  )
}

export default VerifyForm
