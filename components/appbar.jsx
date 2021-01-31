import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledAppbar = styled(Container)`
    background-color: ${(props) => props.theme.palette.primary.main};
    border-radius: 1em;
    color: white;
`;

const Appbar = () => {
    return (
        <StyledAppbar>
            <Typography variant="h1">GeekSpeek</Typography>
        </StyledAppbar>
    );
};

export default Appbar;
