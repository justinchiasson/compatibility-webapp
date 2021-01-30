import { Box, Button, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import Microphone from '../components/microphone';
import { getItems} from '../backend/apiCommunicator';

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
