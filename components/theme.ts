import { Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
