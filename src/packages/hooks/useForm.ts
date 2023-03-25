import { useState } from "react";

export const useForm = <T>(callback: () => void, initialState: T) => {
  const [formValues, setValues] = useState(initialState);
  // const [error, setError] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setError({});
    setValues((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    callback();
  }

  return {
    handleChange,
    handleSubmit,
    formValues,
    // error,
    // setError,
  };
};
