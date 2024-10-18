import React from "react";
import download from './assets/download.jpeg'; // Import the image here

export default function Image() {
    return (
        <div>
            <img src={download} alt="House Rentals" />
        </div>
    );
}
