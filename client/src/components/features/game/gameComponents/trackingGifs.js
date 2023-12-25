import React, {useState, useEffect} from 'react';

import gif2 from "../../../../images/gifs/trackingGifs/giphy-2.gif";
import gif3 from "../../../../images/gifs/trackingGifs/giphy-3.gif";
import gif4 from "../../../../images/gifs/trackingGifs/giphy-4.gif";
import gif5 from "../../../../images/gifs/trackingGifs/giphy-5.gif";
import gif6 from "../../../../images/gifs/trackingGifs/giphy-6.gif";
import gif7 from "../../../../images/gifs/trackingGifs/giphy-7.gif";
import gif8 from "../../../../images/gifs/trackingGifs/giphy-8.gif";
import gif9 from "../../../../images/gifs/trackingGifs/giphy-9.gif";
import gif10 from "../../../../images/gifs/trackingGifs/giphy-10.gif";
import gif11 from "../../../../images/gifs/trackingGifs/giphy-11.gif";
import gif12 from "../../../../images/gifs/trackingGifs/giphy-12.gif";
import gif13 from "../../../../images/gifs/trackingGifs/giphy-13.gif";

const gifPfad = [
    gif2,
    gif3,
    gif4,
    gif5,
    gif6,
    gif7,
    gif8,
    gif9,
    gif10,
    gif11,
    gif12,
    gif13,
]

const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
};

const trackingGifs = () => {
    const randomIndex = getRandomIndex(gifPfad.length); // Generiere den zufälligen Index bei jedem Rendern
    return (
        <>
            <div className="flex justify-center">
                <img src={gifPfad[randomIndex]} alt="Zufälliges GIF" />
            </div>
        </>
    )
}

export default trackingGifs;