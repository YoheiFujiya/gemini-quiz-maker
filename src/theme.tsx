import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        fullWidth: true,
        sx: {
          marginBottom: "10px",
          height: "80px",
          fontSize: "1.5rem",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});

export default theme;
