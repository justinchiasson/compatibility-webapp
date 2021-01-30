import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Appbar = () => {
    return (
        <AppBar color='primary' position='static'>
            <Toolbar>
                <Typography color='secondary' variant='h3' component='h1'>GeekSpeek</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Appbar;
