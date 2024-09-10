// Import React (if you're using React versions older than 17)
import React from "react";

// Define a functional component
const PikaIframe = () => {
  return (
    <div>
      <iframe
        title="Pika"
        src="https://pika.ai.copilot.live"
        style={{ border: "none", width: "700px", height: "360px" }}
        loading="lazy"
        allow="microphone; camera; speaker; clipboard-read; clipboard-write; geolocation"
      ></iframe>
    </div>
  );
};

// Export the component to be used in other parts of your application
export default PikaIframe;
