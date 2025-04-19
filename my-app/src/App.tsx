import React, { useState } from "react";

function App() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = {
    userName: /^[a-zA-Z0-9-]{4,}$/.test(values.userName),
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(values.email),
    gender: values.gender === "male" || values.gender === "female",
    password: values.password.length >= 8,
    confirmPassword: values.password === values.confirmPassword,
    terms: values.terms,
  };

  const isFormValid = Object.values(validate).every(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (isFormValid) {
      console.log("Submitted:", values);
    }
  };

  const renderError = (field: keyof typeof validate, message: string) =>
    submitted && !validate[field] ? (
      <span style={{ color: "red", fontSize: "0.9em" }}>{message}</span>
    ) : null;

  return (
    <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: 300,
        }}
        noValidate
      >
        <h1>Register</h1>

        <input
          name="userName"
          placeholder="User Name"
          value={values.userName}
          onChange={handleChange}
        />
        {renderError(
          "userName",
          "At least 4 characters, letters/numbers/dashes only"
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {renderError("email", "Enter a valid email")}

        <select name="gender" value={values.gender} onChange={handleChange}>
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {renderError("gender", "Please select a gender")}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {renderError("password", "Password must be at least 8 characters")}

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {renderError("confirmPassword", "Passwords do not match")}

        <label>
          <input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={handleChange}
          />{" "}
          I have read the agreement
        </label>
        {renderError("terms", "You must accept the agreement")}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
