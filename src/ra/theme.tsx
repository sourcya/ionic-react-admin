import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
      type: 'light', // Switching the dark mode on is a single property value change.
      primary: {
        main: blue[500],
      },
      secondary: {
        main: blue[500],
      },
    },
})

export default theme;