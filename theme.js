import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: {
           main: '#80b3ff',
        },
        secondary: {
            main: '#ffcc80',
        }
    }
});

export default theme;
