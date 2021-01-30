import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Box } from '@material-ui/core';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import Appbar from './appbar';
import Navbar from './navbar';
import theme from '../theme';
import styled from 'styled-components';

const StyledPaper = styled(Box)`
    background: ${(props) => props.theme.palette.secondary.light};
    min-height: ${(props) => props.theme.breakpoints.sm};
`;

const Layout = ({ children }) => {
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <MuiThemeProvider theme={theme}>
                    <Head>
                        <title>GeekSpeek</title>
                        <link rel="icon" href="/geek-speek.png" />
                    </Head>

                    <main>
                        <StyledPaper>
                            <Appbar />
                            {children}
                            <Navbar />
                        </StyledPaper>
                    </main>
                </MuiThemeProvider>
            </ThemeProvider>
        </StylesProvider>
    );
};

export default Layout;
