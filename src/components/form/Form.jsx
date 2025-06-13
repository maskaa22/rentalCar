import React, { useState } from "react";
import Input from "../input/Input";
import c from "./For,.module.css";

const Form = () => {
  const [values, setValues] = useState({
    nameUser: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <form className={c.form}>
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
      <button className={c.btn}>Send</button>
    </form>
  );
};

export default Form;
