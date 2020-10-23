import React, { useState, useEffect }from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

  useEffect(() => {
    console.log("render")
  }, [values.password])

  return (
    <div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
