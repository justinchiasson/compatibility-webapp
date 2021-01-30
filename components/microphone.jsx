import { IconButton, Typography } from '@material-ui/core';
import { SettingsVoiceOutlined } from '@material-ui/icons';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState, useEffect } from 'react';
import { getItems } from '../backend/apiCommunicator';
import { parseQuery } from '../backend/queryParser';

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
    }

    return (
        <>
            <IconButton fontSize='large' onClick={handleListening}>
                <SettingsVoiceOutlined />
            </IconButton>
            <Typography>
            {query}

            </Typography>
        </>
    );
};

export default Microphone;
