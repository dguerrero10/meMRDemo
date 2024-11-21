import classes from "./AuthLayout.module.css";

export default function AuthLayout({ children }) {
  return (
    <div className={classes["auth-layout-grid"]}>
      <div className={classes["auth-layout-grid__left-content"]}>
        <div className={classes["auth-layout-grid__overlay-text"]}>
          <h1>AI-automated medical record retrieval & analysis.</h1>
          <p>Fully automated. Full-service.</p>
        </div>
      </div>
      <div className={classes["auth-layout-grid__right-content"]}>{children}</div>
    </div>
  );
}
