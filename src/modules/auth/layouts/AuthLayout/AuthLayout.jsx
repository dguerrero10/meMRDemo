import classes from "./AuthLayout.module.css";

export default function AuthLayout({ children }) {
  return (
    <div className={classes["auth-layout-grid"]}>
      <div className={classes["auth-layout-grid__left-content"]}></div>
      <div className={classes["auth-layout-grid__right-content"]}>{children}</div>

    </div>
  );
}
