import React, { useState } from 'react';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction, Container } from '@material-ui/core';
import { RestoreOutlined, SettingsVoiceOutlined, FindInPageOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const StyledNavbar = styled(Container)`
    background-color: ${(props) => props.theme.palette.primary.light};
    border-radius: 10px;
    padding: 0  0;
`;

const StyledBottomNav = styled(BottomNavigation)`
    display: flex;
    background: ${(props) => props.theme.palette.primary.light};
`;

const StyledNavButton = styled(BottomNavigationAction)`
    background: ${(props) => props.theme.palette.secondary.light};
    border-radius: 20px;
    height: 75%;
    margin: auto;
    padding: 0 0 !important;
`;

const Navbar = () => {
    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledNavbar maxWidth="md">
            <StyledBottomNav value={value} onChange={handleChange}>
                <Link href="/history">
                    <StyledNavButton value={'history'} icon={<RestoreOutlined />} />
                </Link>

                <Link href="/">
                    <StyledNavButton value={'home'} icon={<SettingsVoiceOutlined />} />
                </Link>

                <Link href="/results">
                    <StyledNavButton
                        value={'results'}
                        icon={<FindInPageOutlined />}
                    />
                </Link>
            </StyledBottomNav>
        </StyledNavbar>
    );
};

export default Navbar;
