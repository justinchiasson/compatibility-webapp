import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled.div`
    box-shadow: 0px 1px 4px 1px ${(props) => props.theme.palette.primary.dark};
    border-radius: 2rem;
    display: flex;
    align-items: center;
    margin: 1rem 3rem;
    background: ${(props) =>
        `linear-gradient(45deg, ${props.theme.palette.primary.main} 10%,  ${props.theme.palette.primary.dark} 100%)`};
`;

const CardContent = styled.div`
    display: flex column;
    flex-grow: 1;
    margin-right: 1rem;
    color: white;
`;

const CardImage = styled.img`
    flex-grow: 1;
    width: 55px;
    height: 55px;
    max-width: 55px;
    max-height: 55px;
    margin: 1rem 1rem;
    object-fit: scale-down;
    border: 1rem solid ${(props) => props.theme.palette.primary.light};
    border-radius: 2rem;
`;

const Card = ({ title, description, price, src }) => {
    return (
        <StyledCard>
            <CardImage src={src} />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body1">${price}</Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </StyledCard>
    );
};

export default Card;
