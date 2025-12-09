import { CssBaseline } from "@mui/material";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routeConfig } from "./routes/routes";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#210196ff",
    },
    secondary: {
      main: "#0f0f17",
    },
  }, 
});

const router = createBrowserRouter(routeConfig);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
