import classes from "./InputField.module.css";

export default function InputField({ label, id, manuallySetError, error, ...props }) {
  const errorMessage = manuallySetError || error;
  
  return (
    <div className={classes["input-wrapper"]}>
      <label htmlFor={id} className={classes["input-label"]}>
        {label}
      </label>
      <input 
        id={id} 
        {...props}
        className={`${classes["input"]} ${errorMessage ? classes["input-error"] : ""}`}
      />
      <p
        className={`${classes["input-error-msg"]} ${errorMessage ? classes["visible"] : ""}`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
