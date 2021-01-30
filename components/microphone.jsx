import { IconButton } from '@material-ui/core';
import { SettingsVoiceOutlined } from '@material-ui/icons';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState, useEffect } from 'react';

const Microphone = () => {

    const [query, setQuery] = useState();

    const { transcript, resetTranscript, listening, finalTranscript } = useSpeechRecognition();

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }
    
    useEffect(() => {
        // call search method when done listening
        if (!listening && finalTranscript) {
            console.log(finalTranscript);
            resetTranscript();
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
            {query}
        </>
    );
};

export default Microphone;
