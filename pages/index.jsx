import { Box, Typography } from '@material-ui/core';
import 'regenerator-runtime/runtime.js';
import Layout from '../components/layout';
import Microphone from '../components/microphone';

export default function history() {
    return (
        <Layout>
            <Box>
                <Typography variant='body1'>
                    Press the microphone and say anything into your phone!
                </Typography>
            </Box>

            <div>
                <Microphone />
            </div>
        </Layout>
    );
}
