import React, { useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import MainContext from "../../../context/context";
import './add.css'
const Add = () => {
  const { data, setData } = useContext(MainContext);
  return (
    <div className="form__div">
      
      <Formik 
        initialValues={{ name: "", image: "", description: "", price: "" }}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:3000/products", {
              id: uuidv4(),
              name: values.name,
              image: values.image,
              description: values.description,
              price: values.price,
            })
            .then((res) => {
              setData([...data, res.data]);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              placeholder="Image"
              type="text"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              placeholder="Description"
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && errors.description}
            <input
              placeholder="Price"
              type="number"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
