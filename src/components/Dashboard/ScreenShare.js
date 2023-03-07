import React, { useRef, useState } from 'react';

const ScreenShare = () => {
  const [isSharing, setIsSharing] = useState(false);
  const localStreamRef = useRef(null);

  const shareScreen = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia();
      localStreamRef.current = stream;
      setIsSharing(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopSharing = () => {
    localStreamRef.current.getTracks().forEach(track => track.stop());
    setIsSharing(false);
  };

  return (
    <div>
      {!isSharing && (
        <button className="flex items-center justify-center p-2 ml-4 rounded-full hover:bg-green-500 bg-red-500" onClick={shareScreen}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"
              />
          </svg>
        </button>
      )}
      {isSharing && (
        <button className="flex items-center justify-center p-2 ml-4 rounded-full hover:bg-gray-300 bg-red-500"
        onClick={stopSharing}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"
              />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScreenShare;
