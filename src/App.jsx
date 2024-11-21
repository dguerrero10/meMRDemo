import { RouterProvider } from "react-router-dom";
import { router } from "./routerConfig";

import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { customButtonTheme } from "./utils/Themes";

function App() {
  return (
    <ThemeProvider theme={customButtonTheme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
