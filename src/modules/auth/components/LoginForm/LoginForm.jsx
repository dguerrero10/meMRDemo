import { Button, Divider, Snackbar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./LoginForm.module.css";
import InputField from "../../../../shared/ui/InputField/InputField";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useNavigate } from "react-router-dom";
import { startTransition, useState } from "react";
import { useInput } from "../../../../utils/hooks/useInput";
import {
  isEmail,
  isNotEmpty,
} from "../../../../utils/validation/validationAuth";

export default function LoginForm({ setOnLoginPage }) {
  // Can split this component up.
  
  const navigate = useNavigate();
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
    manualErrorMessage: emailManualError,
    setManualError: setEmailManualError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
    manualErrorMessage: passwordManualError,
    setManualError: setPasswordManualError,
  } = useInput("", (value) => isNotEmpty(value));

  const handleLogin = (event) => {
    event.preventDefault();

    setEmailManualError("");
    setPasswordManualError("");

    let formIsInvalid = false;

    if (!isNotEmpty(emailValue) || emailHasError) {
      setEmailManualError("Please enter a valid email.");
      formIsInvalid = true;
    }

    if (!isNotEmpty(passwordValue) || passwordHasError) {
      setPasswordManualError("Password is required.");
      formIsInvalid = true;
    }

    setSnackbarIsOpen(true);

    if (formIsInvalid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      navigate("/dashboard/home");
      setIsSubmitting(false);
    }, 500);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    startTransition(() => {
      navigate("/dashboard/home");
    });
  };

  const action = (
    <>
      <Button
        sx={{marginLeft: "-1rem"}}
        color="secondary"
        size="small"
        endIcon={<ArrowForwardOutlinedIcon />}
        onClick={handleClose}
      >
        Just take me to Dashboard
      </Button>
    </>
  );

  return (
    <form className={classes["login-form"]} onSubmit={handleLogin}>
      <div className={classes["login-form__logo"]}>
        <svg
          width="100"
          height="23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.351 2.096a7.163 7.163 0 0 0-10.127 0 7.163 7.163 0 0 0-10.127 0 7.156 7.156 0 0 0 0 10.123l9.647 9.643a.68.68 0 0 0 .96 0l9.647-9.643a7.155 7.155 0 0 0 0-10.123Z"
            fill="#DF5B53"
          ></path>
          <path
            d="M8.21 4.189H1.121a.71.71 0 0 0-.666.458 7.155 7.155 0 0 0 1.643 7.572l.401.402a.713.713 0 0 0 .503.208h18.444c.188 0 .37-.075.502-.208l.402-.402a7.142 7.142 0 0 0 2.03-6.027.709.709 0 0 0-.705-.607h-13.48a.712.712 0 0 1-.503-.208l-.982-.98a.71.71 0 0 0-.502-.208Z"
            fill="#FCCC5E"
          ></path>
          <path
            d="m2.099 12.22 5.99 5.987a.712.712 0 0 0 .502.209h7.268c.188 0 .37-.075.502-.209l5.99-5.988a.614.614 0 0 0-.434-1.048h-10.56a.708.708 0 0 1-.502-.208l-.98-.98a.708.708 0 0 0-.503-.209H1.64c-.55 0-.898.6-.615 1.072.294.49.652.95 1.074 1.373Z"
            fill="#6C6D8D"
          ></path>
          <path
            d="M16.097 16.756H12.52a.709.709 0 0 1-.503-.209l-.98-.98a.712.712 0 0 0-.503-.209H6.96a.71.71 0 0 0-.502 1.214l5.267 5.266a.712.712 0 0 0 1.006 0l3.871-3.87a.711.711 0 0 0-.504-1.212ZM29.32 7.589h3.224c.047 0 .085.037.085.084v2.095c0 .047.038.084.084.084h.007a.084.084 0 0 0 .079-.055c.547-1.48 1.848-2.376 3.557-2.376 1.74 0 3.04.918 3.469 2.37.01.036.042.061.08.061h.013a.085.085 0 0 0 .078-.055c.544-1.44 1.993-2.376 3.85-2.376 2.391 0 4.046 1.587 4.046 4.37v8.546a.084.084 0 0 1-.085.084h-3.382a.084.084 0 0 1-.084-.084v-7.845c0-1.429-.853-2.138-1.99-2.138-1.295 0-2.056.902-2.056 2.23v7.753a.084.084 0 0 1-.084.084h-3.283a.084.084 0 0 1-.085-.084v-7.92c0-1.261-.785-2.064-1.956-2.064-1.187 0-2.09.944-2.09 2.364v7.62a.084.084 0 0 1-.085.084H29.32a.084.084 0 0 1-.084-.084V7.673c0-.047.038-.084.084-.084ZM50.183 14.064c0-3.96 2.45-6.642 6.228-6.642 3.394 0 6.035 2.155 6.035 6.517v.893a.084.084 0 0 1-.084.084h-8.66v.01c0 1.913 1.129 3.09 2.91 3.09 1.163 0 2.07-.489 2.444-1.428a.083.083 0 0 1 .083-.053l3.133.206c.053.004.09.053.078.104-.538 2.326-2.664 3.83-5.797 3.83-3.955-.002-6.37-2.542-6.37-6.61Zm8.824-1.353c.047 0 .087-.04.085-.088-.048-1.483-1.107-2.545-2.623-2.545-1.547 0-2.645 1.122-2.76 2.542a.085.085 0 0 0 .085.09h5.213Z"
            fill="#A4DAD7"
          ></path>
          <path
            d="m69.513 3.364 4.671 11.392a.083.083 0 0 0 .079.052h.087c.034 0 .065-.02.078-.052L79.1 3.364a.083.083 0 0 1 .078-.053H83.5c.047 0 .085.038.085.085v16.942a.084.084 0 0 1-.085.084H80.16a.084.084 0 0 1-.085-.084V9.37a.084.084 0 0 0-.163-.031l-4.388 10.948a.084.084 0 0 1-.078.053h-2.277a.084.084 0 0 1-.078-.053l-4.388-10.99a.084.084 0 0 0-.163.03v11.01a.085.085 0 0 1-.084.085h-3.342a.084.084 0 0 1-.084-.085V3.396c0-.047.038-.085.084-.085h4.322a.082.082 0 0 1 .078.053ZM86.56 3.396c0-.047.037-.085.084-.085h6.67c3.886 0 6.135 2.19 6.135 5.59 0 2.306-1.048 3.987-2.942 4.835a.085.085 0 0 0-.04.117l3.523 6.445a.085.085 0 0 1-.075.126h-3.802a.085.085 0 0 1-.074-.045l-3.195-5.976a.085.085 0 0 0-.075-.045h-2.506a.084.084 0 0 0-.085.084v5.897a.084.084 0 0 1-.084.085h-3.45a.084.084 0 0 1-.085-.085V3.396Zm6.076 8.053c2.073 0 3.084-.852 3.084-2.548 0-1.705-1.011-2.633-3.1-2.633h-2.356a.084.084 0 0 0-.085.085v5.011c0 .047.038.084.085.084l2.372.002Z"
            fill="#6C6D8D"
          ></path>
        </svg>
      </div>
      <h1>Login</h1>

      <InputField
        label="Email"
        id="email"
        name="email"
        type="text"
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        value={emailValue}
        error={emailHasError && "Please enter a valid email."}
        manuallySetError={emailManualError}
      />

      <InputField
        label="Password"
        id="password"
        name="password"
        type="password"
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange}
        value={passwordValue}
        error={passwordHasError && "Please provide a password."}
        manuallySetError={passwordManualError}
      />

      {!isSubmitting && (
        <>
          <p className={classes["login-form__para"]}>Forgot password?</p>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "1rem" }}
            className="width-100"
          >
            Login
          </Button>
          <Divider sx={{ margin: "1rem 0" }} />
          <Button
            startIcon={<PersonAddAltOutlinedIcon />}
            color="tertiary"
            variant="outlined"
            className="width-100"
            type="button"
            onClick={() => setOnLoginPage(false)}
          >
            Sign up
          </Button>
        </>
      )}

      <Snackbar
        open={snackbarIsOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message="For this demo, any email & password is fine."
        action={action}
      />

      {isSubmitting && (
        <CircularProgress
          sx={{ display: "flex", alignSelf: "center", marginTop: "1rem" }}
        />
      )}
    </form>
  );
}
