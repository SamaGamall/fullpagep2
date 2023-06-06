import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import { Link, NavLink  } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    setSubmitting(false);
  };

  return (
    <div className='formbody'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <img  src="./images/smartphone(4).png" alt="your-image-description"></img>
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <Field 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`} 
                />
                <div className="input-group-append">
                  <button 
                    type="button" 
                    className="btn btn-light" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
<Link to="/insideHome " >
            <button  to="/insideHome " className='btn8' type="submit"  disabled={isSubmitting}>
              Login
            </button>
</Link>
            <Link to="/signupage">Don't have an account? Creat Your Account</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
