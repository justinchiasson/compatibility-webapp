import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#a5b9cd',
            main: '#6f8faf',
            dark: '#45596d'
        },
        secondary: {
            light: '#cdb9a5',
            main: '#af8f6f',
            dark: '#6d5945'
        },
        error: {
            light: '#cda5a5',
            main: '#af6f6f',
            dark: '#6d4545'
        },
        warning: {
            light: '#cda5b9',
            main: '#af6f8f',
            dark: '#6d4559'
        },
        info: {
            light: '#b9a5cd',
            main: '#8f6faf',
            dark: '#59456d'
        },
        success: {
            light: '#a5cdb9',
            main: '#6faf8f',
            dark: '#456d59'
        }
    }
});

export default theme;
