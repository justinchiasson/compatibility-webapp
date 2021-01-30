import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledAppbar = styled(Container)`
    background-color: ${(props) => props.theme.palette.primary.light};
    border-radius: 10px;
    color: black;
`;

const Appbar = () => {
    return (
        <StyledAppbar maxWidth="md">
            <Typography variant="h2" component="h1">
                GeekSpeek
            </Typography>
        </StyledAppbar>
    );
};

export default Appbar;
