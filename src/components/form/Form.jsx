import { useState } from "react";
import Input from "../input/Input";

import c from "./Form.module.css";
import { formSchema } from "../../validations/formSchema";
import { toast, ToastContainer } from "react-toastify";
import Calendar from "../calendar/Calendar";

const Form = () => {
  const [values, setValues] = useState({
    nameUser: "",
    email: "",
    date: null,
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [placeholderText, setPlaceholderText] = useState("Name*");

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
  const handleDateChange = (date) => {
    setValues((prev) => ({
      ...prev,
      date: date,
    }));

    if (errors.date) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.date;
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

  const handleFocus = () => {
    setPlaceholderText("Name");
  };

  const handleBlur = () => {
    setPlaceholderText("Name*");
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
          placeholder={placeholderText}
          name="nameUser"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Input
          classInput={c.input}
          placeholder="Email*"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <Calendar value={values.date} handleChange={handleDateChange} />

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
