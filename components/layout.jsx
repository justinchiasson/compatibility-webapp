import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Box, Container } from '@material-ui/core';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import Appbar from './appbar';
import theme from '../theme';
import styled from 'styled-components';

const StyledPaper = styled(Box)`
    background: ${(props) => props.theme.palette.secondary.light};
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
                            <Container maxWidth="md">
                                <Appbar />
                                {children}
                            </Container>
                        </StyledPaper>
                    </main>
                </MuiThemeProvider>
            </ThemeProvider>
        </StylesProvider>
    );
};

export default Layout;
