import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // palette: {
  //   mode: "dark",
  // },
  components: {
    MuiTypography: {
      defaultProps: {
        gutterBottom: true,
      },
      // styleOverrides: {
      //   h1: {
      //     fontSize: "3.5rem",
      //     fontWeight: 500,
      //   },
      // },
      styleOverrides: {
        h4: {
          fontFamily: "DotGothic16",
        },
        h6: {
          fontFamily: "DotGothic16",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
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
