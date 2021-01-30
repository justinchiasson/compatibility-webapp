import { IconButton, Typography } from '@material-ui/core';
import { SettingsVoiceOutlined } from '@material-ui/icons';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState, useEffect } from 'react';
import { getItems } from '../backend/apiCommunicator';
import { parseQuery } from '../backend/queryParser';
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
    padding: 1em;
`;

const Microphone = () => {
    const [query, setQuery] = useState();

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
        }
    });

    const handleListening = async () => {
        resetTranscript();
        setQuery();
        await SpeechRecognition.startListening();
    };

    return (
        <>
            <StyledIconButton fontSize="large" onClick={handleListening}>
                <StyledIcon />
            </StyledIconButton>
            <Typography>{query}</Typography>
        </>
    );
};

export default Microphone;
