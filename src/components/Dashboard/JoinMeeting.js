import React, { useRef, useState } from 'react';
import ScreenShare from './ScreenShare';

const JoinMeeting = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  const handleStart = async () => {
    const constraints = {
      video: true,
      audio: true
    };

    try {
      const newStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(newStream);
      videoRef.current.srcObject = newStream;
    } catch (error) {
      console.error(error);
    }
  };

  const handleStop = () => {
    stream.getTracks().forEach((track) => {
      track.stop();
    });
    videoRef.current.srcObject = null;
    setStream(null);
  };

  return (
    <div className="h-screen bg-green-100">
      <div className="mt-16 pt-4 flex justify-center items-center">
        <video className="h-3/4 w-3/4"
          ref={videoRef}
          autoPlay
          controls
        />
      </div>
      <div className="flex justify-center items-center p-2">
        {stream ? (
            <button className="btn glass text-white bg-red-500 hover:bg-red-500 hover:text-white" onClick={handleStop}>Stop</button>
        ) : (
            <button className="btn glass text-white bg-green-500 hover:bg-green-500 hover:text-white"  onClick={handleStart}>Start</button>
        )}
        <ScreenShare></ScreenShare>
      </div>

    
      
    </div>
  );
};

export default JoinMeeting;
