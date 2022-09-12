import React, { FC, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

export interface IWelcomeProps {
    title?: string;
}

const Welcome: FC<IWelcomeProps> = ({title}) => {
    const [message, setMessage] = useState('');
    const [showJitsi, setShowJitsi] = useState(false);
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage('The number is ' + number)
        } else {
            setMessage('No number was provided')
        }
    }, [number])

    return (
        <Fragment>
            <h1>The {title || 'Welcome'} Page</h1>
            <p>{message}</p>
            <Button onClick={() => setShowJitsi(!showJitsi)} variant={'outlined'}>Toggle meeting</Button>

            {/*<JitsiMeeting*/}
            {/*    roomName = "PleaseUseAGoodRoomName"*/}
            {/*    configOverwrite = {{*/}
            {/*        startWithAudioMuted: true,*/}
            {/*        disableModeratorIndicator: true,*/}
            {/*        startScreenSharing: true,*/}
            {/*        enableEmailInStats: false*/}
            {/*    }}*/}
            {/*    interfaceConfigOverwrite = {{*/}
            {/*        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true*/}
            {/*    }}*/}
            {/*    userInfo = {{*/}
            {/*        displayName: 'YOUR_USERNAME',*/}
            {/*        email: 'deniskoliban@gmail.com'*/}
            {/*    }}*/}
            {/*    onApiReady = { (externalApi) => {*/}
            {/*        // here you can attach custom event listeners to the Jitsi Meet External API*/}
            {/*        // you can also store it locally to execute commands*/}
            {/*    } }*/}
            {/*    getIFrameRef = { (iframeRef) => {*/}
            {/*        iframeRef.style.height = '600px';*/}
            {/*        iframeRef.style.width = '1000px'*/}
            {/*    } }*/}
            {/*/>*/}
        </Fragment>
    );
}

export default Welcome;
