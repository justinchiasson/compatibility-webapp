import { Container, Typography } from '@material-ui/core';
import 'regenerator-runtime/runtime.js';
import Layout from '../components/layout';
import Microphone from '../components/microphone';
import styled from 'styled-components';

const ColoredBox = styled(Container)`
    color: black;
    display: flex;
    justify-content: center;
    padding: 3em 3em;
    font-size: 16px;
`;

const LightBox = styled(Container)`
    display: flex;
    justify-content: center;
    padding: 3em;
`;

export default function history() {
    return (
        <Layout>
            <ColoredBox maxWidth="md" my={2}>
                <Typography variant="body1">
                    Press the microphone and say anything into your phone!
                </Typography>
            </ColoredBox>
            <LightBox maxWidth="md">
                <Microphone />
            </LightBox>
        </Layout>
    );
}