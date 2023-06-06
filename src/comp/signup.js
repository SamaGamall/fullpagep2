import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";


const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  age: Yup.number().required("Required").positive().integer(),
  gender: Yup.string().oneOf(["Male", "Female"]).required("Required"),
  photo: Yup.mixed(),
});

const Signup = () => {
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("/api/signup", values);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);     
  };
  return (
    <div>
    <Formik
  initialValues={{
    email: "",
    password: "",
    name: "",
    address: "",
    phoneNumber: "",
    age: "",
    gender: "",
    photo: null,
  }}
  validationSchema={validationSchema}
  onSubmit={onSubmit}
>
  {({ isSubmitting, isValid, dirty }) => (
          <Form>
            <img
              src="./images/smartphone (1).png"
              alt="your-image-description"
            ></img>
            <h1>Sign Up</h1>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
            </div>

            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field type="text" name="phoneNumber" />
              <ErrorMessage name="phoneNumber" />
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age" />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <Field as="select" name="gender">
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Field>
              <ErrorMessage name="gender" />
            </div>
            <div>
              <label for="blood-type">Blood Type:</label>
              <select id="blood-type" name="blood-type">
                <option value="A">A+</option>
                <option value="B">A-</option>
                <option value="AB">B+</option>
                <option value="O">B-</option>
                <option value="O">AB+</option>
                <option value="O">AB-</option>
                <option value="O">O+</option>
                <option value="O">O-</option>
              </select>
            </div>
            <div>
              <label htmlFor="photo">Photo</label>
              <Field type="file" name="photo" />
              <ErrorMessage name="photo" />
            </div>
            <Link to="/">
  <button
    className="btn8"
    type="submit"
    disabled={isSubmitting || !isValid || !dirty}
  >
    Submit
  </button>
</Link>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
