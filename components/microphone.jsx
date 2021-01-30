import { IconButton } from '@material-ui/core';
import { SettingsVoiceOutlined } from '@material-ui/icons';

const Microphone = () => {
    return (
        <IconButton fontSize='large'>
            <SettingsVoiceOutlined />
        </IconButton>
    );
};

export default Microphone;
