import classes from './InputField.module.css';

export default function InputField({ label, type, ...props }) {
  return (
    <div className={classes["input-wrapper"]}>
      <label className={classes["input-label"]}>
        {label}
      </label>
      <input {...props} type={type} className={classes["input"]}/>
    </div>
  );
}
