import React, { useState } from 'react';
import Situation1_1 from './images/Situation1_1.jpg';
import Situation1_2 from './images/Situation1_2.jpg';
import Situation1_3 from './images/Situation1_3.jpg';

function InteractiveImage({ filename }) {
    // State to track the current image
    const [currentImage, setCurrentImage] = useState(filename);

    // Click handler for area clicks
    const clickHandler = (area) => {
        if (area === 'area1') {
            setCurrentImage(Situation1_1); // Replace with the image path for area 1
        } else if (area === 'area2') {
            setCurrentImage(Situation1_2); // Replace with the image path for area 2
        } else if (area === 'area3') {
            setCurrentImage(Situation1_3); // Replace with the image path for area 3
        }
    };

    return (
        <div>
            {/* Render the current image */}
            <img
                src={currentImage}
                alt="Interactive"
                useMap="#image-map"
                style={{ width: '100%', height: 'auto' }}
            />
            <map name="image-map">
                <area
                    target=""
                    alt="Area 1"
                    title="Area 1"
                    coords="168,555,1,224"
                    shape="rect"
                    onClick={() => clickHandler('area1')} // Pass identifier to the handler
                />
                <area
                    target=""
                    alt="Area 2"
                    title="Area 2"
                    coords="646,555,255,270"
                    shape="rect"
                    onClick={() => clickHandler('area2')}
                />
                <area
                    target=""
                    alt="Area 3"
                    title="Area 3"
                    coords="803,279,983,555"
                    shape="rect"
                    onClick={() => clickHandler('area3')}
                />
            </map>
        </div>
    );
}

export default InteractiveImage;
