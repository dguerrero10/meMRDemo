import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem" }}>
      <h1 className="no-margin">404 - Page not found</h1>
      <p>I probably didn't build this link/page out.</p>
      <Button variant="contained" onClick={() => navigate("/dashboard/home")}>Take me to Dashboard</Button>
    </div>
  );
}
