import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled.div`
    box-shadow: 0px 1px 4px 1px ${(props) => props.theme.palette.primary.dark};
    border-radius: 2rem;
    display: flex;
    margin: 1rem 3rem;
    background: ${(props) =>
        `linear-gradient(45deg, ${props.theme.palette.primary.main} 10%,  ${props.theme.palette.primary.dark} 100%)`};
`;

const CardContent = styled.div`
    flex-grow: 1;
    margin-right: 1rem;
`;

const CardImage = styled.img`
    flex-grow: 1;
    margin: 1rem 1rem;
    object-fit: contain;
`;

export const DemoCard = () => (
    <Card
        title="Smart TV"
        price="$150.00"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu. "
        src="https://via.placeholder.com/55"
    />
);

const Card = ({ title, description, price, src }) => {
    return (
        <StyledCard>
            <CardImage src={src} />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body1">{price}</Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </StyledCard>
    );
};

export default Card;
