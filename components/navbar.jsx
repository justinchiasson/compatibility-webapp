import React, { useState } from 'react';
import Link from 'next/link';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { RestoreOutlined, SettingsVoiceOutlined, FindInPageOutlined } from '@material-ui/icons';

const Navbar = () => {
    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} showLabels>
            <Link href='/history'>
                <BottomNavigationAction
                    label='History'
                    value={'history'}
                    icon={<RestoreOutlined />}
                />
            </Link>

            <Link href='/'>
                <BottomNavigationAction
                    label='Home'
                    value={'home'}
                    icon={<SettingsVoiceOutlined />}
                />
            </Link>

            <Link href='/results'>
                <BottomNavigationAction
                    label='Results'
                    value={'results'}
                    icon={<FindInPageOutlined />}
                />
            </Link>
        </BottomNavigation>
    );
};

export default Navbar;
