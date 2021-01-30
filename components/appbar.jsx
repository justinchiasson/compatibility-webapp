import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledAppbar = styled(Container)`
    background-color: ${(props) => props.theme.palette.primary.light};
    border-radius: 1em;
    color: black;
`;

const Appbar = () => {
    return (
        <StyledAppbar>
            <Typography variant="h1">GeekSpeek</Typography>
        </StyledAppbar>
    );
};

export default Appbar;
