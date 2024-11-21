import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const [manuallySetError, setManuallySetError] = useState("");

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
    setManuallySetError("");
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  const setManualError = (errorMessage) => {
    setManuallySetError(errorMessage);
  };

  return {
    handleInputChange,
    handleInputBlur,
    setManualError,
    value: enteredValue,
    hasError: didEdit && !valueIsValid || manuallySetError,
    manualErrorMessage: manuallySetError,
  };
}
