import { IconButton } from '@material-ui/core';
import { SettingsVoiceOutlined } from '@material-ui/icons';

import styled from 'styled-components';

const StyledIcon = styled(SettingsVoiceOutlined)`
    fill: ${(props) => props.theme.palette.secondary.light};
    font-size: 10em;
`;

const StyledIconButton = styled(IconButton)`
    background: ${(props) =>
        `linear-gradient(45deg, ${props.theme.palette.primary.light} 60%,  ${props.theme.palette.primary.dark} 100%)`};
    border-radius: 100%;
    width: 15em;
    height: 15em;
    padding: auto;
`;

const Microphone = ({ onClick }) => {
    return (
        <StyledIconButton fontSize="large" onClick={onClick}>
            <StyledIcon />
        </StyledIconButton>
    );
};

export default Microphone;
