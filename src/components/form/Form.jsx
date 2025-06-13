import React, { useState } from "react";
import Input from "../input/Input";
import c from "./For,.module.css";
import { formSchema } from "../../validations/formSchema";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
  const [values, setValues] = useState({
    nameUser: "",
    email: "",
    date: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const errorToast = (error) => toast.error(error);
  const successToast = (text) => toast.success(text);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await formSchema.validateAsync(values, { abortEarly: false });
      setErrors({});
      successToast("Successfully rented!");

      setValues({
        nameUser: "",
        email: "",
        date: "",
        comment: "",
      });
    } catch (err) {
      const newErrors = {};
      const allErrorMessages = [];

      err.details.forEach((error) => {
        newErrors[error.path[0]] = error.message;
        allErrorMessages.push(error.message);
      });
      setErrors(newErrors);

      if (allErrorMessages.length > 0) {
        const toastContent = (
          <div>
            {allErrorMessages.map((msg, index) => (
              <p key={index} style={{ margin: "0", padding: "2px 0" }}>
                {msg}
              </p>
            ))}
          </div>
        );
        errorToast(toastContent);
      }
    }
  };

  return (
    <>
      <form className={c.form} onSubmit={handleSubmit}>
        <p className={c.formTitle}>Book your car now</p>
        <p className={c.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <Input
          value={values.nameUser}
          onChange={handleChange}
          classInput={c.input}
          placeholder="Name*"
          name="nameUser"
        />
        <Input
          classInput={c.input}
          placeholder="Email*"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          classInput={c.input}
          placeholder="Booking date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />

        <textarea
          placeholder="Comment"
          name="comment"
          className={c.input}
          value={values.comment}
          onChange={handleChange}
        />
        <button className={c.btn} type="submit">
          Send
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
