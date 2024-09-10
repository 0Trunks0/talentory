"use client"; // Add this line at the top

import { useState } from "react";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import Navbar from "@/Components/payment/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isIframeVisible, setIsIframeVisible] = useState(false); // State to manage iframe visibility

  const toggleIframe = () => {
    setIsIframeVisible(!isIframeVisible); // Toggle iframe visibility
  };

  return (
    <html lang="en">
      <head>{/* Add any additional head elements here */}</head>
      <body className={inter.className}>
        <ConvexClientProvider>
          <Navbar />
          {children}
        </ConvexClientProvider>

        {/* Image Button */}
        <img
          src="images\pikachu.png" // Replace with your image path
          alt="AI"
          onClick={toggleIframe} // Toggle iframe visibility on image click
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1001,
            width: "50px", // Set your preferred width
            height: "50px", // Set your preferred height
            cursor: "pointer",
          }}
        />

        {/* Conditional Rendering of the Iframe */}
        {isIframeVisible && (
          <iframe
            title="Pika"
            src="https://pika.ai.copilot.live"
            style={{
              border: "none",
              position: "fixed",
              bottom: "80px", // Adjust based on image position
              right: "20px",
              width: "300px",  // Set your preferred width
              height: "500px", // Set your preferred height
              zIndex: 1000,
              backgroundColor: "#ffffff",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              borderRadius: "10px"
            }}
            loading="lazy"
            allow="microphone; camera; speaker; clipboard-read; clipboard-write; geolocation;"
          ></iframe>
        )}
      </body>
    </html>
  );
}
