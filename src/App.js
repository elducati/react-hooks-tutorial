import React, { useState, useEffect }from "react";
import Hello from "./Hello"
import {useFetch} from "./useFetch"
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [values2, handleChange2] = useForm({ firstName: "", lastName: "" });

// const [showHello, setShowHello] =  useState(true)  


useFetch('numbersapi.com/42/trivia')
  return (
    <div>
      <>
      {/* <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {showHello && <Hello />} */}
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
