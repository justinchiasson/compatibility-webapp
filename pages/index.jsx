import { Button, Container, Typography } from '@material-ui/core';
import 'regenerator-runtime/runtime.js';
import Layout from '../components/layout';
import Microphone from '../components/microphone';
import styled from 'styled-components';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState, useEffect } from 'react';
import { getItems } from '../backend/apiCommunicator';
import { parseQuery } from '../backend/queryParser';
import { DemoCard } from '../components/card';

const StyledBox = styled(Container)`
    color: white;
    display: flex column;
    justify-content: center;
    padding: 1em 3em;
    text-align: center;
`;

export default function home() {
    const [query, setQuery] = useState();
    const [displayResults, setDisplayResults] = useState(false);

    const { transcript, resetTranscript, listening, finalTranscript } = useSpeechRecognition();

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    useEffect(async () => {
        // call search method when done listening
        if (!listening && finalTranscript) {
            const searchQuery = parseQuery(finalTranscript);
            resetTranscript();
            const response = await getItems(searchQuery);
            console.log(response);
        }

        if (transcript) {
            setQuery(transcript);
            setDisplayResults(true);
        }
    });

    const handleListening = async () => {
        resetTranscript();
        setQuery();
        await SpeechRecognition.startListening();
    };

    return (
        <Layout>
            <StyledBox maxWidth="md" my={2}>
                {displayResults ? (
                    <>
                        <Typography variant="h4" component="p">
                            User Input: {query}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setDisplayResults(false)}>
                            Clear Search Results
                        </Button>
                    </>
                ) : (
                    <Typography variant="h3" component="p">
                        Press the microphone and say anything into your phone!
                    </Typography>
                )}
            </StyledBox>
            <StyledBox maxWidth="md">
                {displayResults ? (
                    <>
                        <DemoCard />
                        <DemoCard />
                        <DemoCard />
                    </>
                ) : (
                    <Microphone onClick={handleListening} />
                )}
            </StyledBox>
        </Layout>
    );
}
