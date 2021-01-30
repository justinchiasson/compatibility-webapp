import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, Box } from '@material-ui/core';
import Head from 'next/head';
import Appbar from './appbar';
import Navbar from './navbar';
import theme from '../theme';

const Layout = ({ children }) => {
    return (
    <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
            <Head>
                <title>GeekSpeek</title>
                <link rel='icon' href='/geek-speek.png' />
            </Head>

            <main>
                <Appbar />
                <Box minHeight='700px'>
                    {children}
                </Box>
                <Navbar />
            </main>
        </MuiThemeProvider>
    </ThemeProvider>
    );
};

export default Layout;
