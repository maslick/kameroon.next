import {useState, useEffect} from "react";

export function useUserMedia(constraints) {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableVideoStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setMediaStream(stream);
      } catch (err) {
        console.error('Error accessing media devices:', err);
      }
    }

    if (!mediaStream) {
      enableVideoStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
        setMediaStream(null);
      };
    }

  }, [mediaStream, constraints]);

  return mediaStream;
}
