import React from 'react'
import style from './ForgetPassword.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  toast } from 'react-toastify';
const ForgetPassword = (props) => {
  const{verify,setVerify}=props
    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
          console.log(values);
          toast.success("password send succesfully to email Registered Email id");
          setVerify(true);
        },
      });
  return (
    <form onSubmit={formik.handleSubmit}>
    <label className={style.label}>Email Address</label>
    <div>
    <input autoComplete='off'  type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}
     value={formik.values.email} 
     className={style.inputField} />
      {formik.touched.email && formik.errors.email ? (
 <div className={style.error}>{formik.errors.email}</div>
) : null}
    </div>
    <button type="submit" className={style.next}>next</button>
</form>
  )
}

export default ForgetPassword
