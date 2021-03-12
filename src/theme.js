import { createMuiTheme } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    white: {
      main: grey[900],
    },
    background: {
      default: "#fff",
    },
  },
  spacing: (value) => value ** 2,
});

export default theme;
