import React, { useState } from 'react';
import Situation1_0 from './images/Situation1_0.jpg';
import Situation2_0 from './images/Situation2_0.jpg';
import Situation3_0 from './images/Situation3_0.jpg';

import Situation1_1 from './images/Situation1_1.jpg';
import Situation1_2 from './images/Situation1_2.jpg';
import Situation1_3 from './images/Situation1_3.jpg';
import Situation2_1 from './images/Situation2_1.jpg';
import Situation2_2 from './images/Situation2_2.jpg';
import Situation2_3 from './images/Situation2_3.jpg';
import Situation3_1 from './images/Situation3_1.jpg';
import Situation3_2 from './images/Situation3_2.jpg';
import Situation3_3 from './images/Situation3_3.jpg';

function InteractiveImage(
    { filename,
    imageMap,
    selection,
    area1coords,
    area2coords,
    area3coords }) {
    // State to track the current image
    const [currentImage, setCurrentImage] = useState(filename);


    let option1 = Situation1_1;
    let option2 = Situation1_2;
    let option3 = Situation1_3;
    if (filename === Situation1_0) {
        option1 = Situation1_1;
        option2 = Situation1_2;
        option3 = Situation1_3;
    }
    if (filename == Situation2_0) {
        option1 = Situation2_1;
        option2 = Situation2_2;
        option3 = Situation2_3;
    }
    if (filename == Situation3_0) {
        option1 = Situation3_1;
        option2 = Situation3_2;
        option3 = Situation3_3;
    }

    // Click handler for area clicks
    const clickHandler = (area) => {
        let newImage = currentImage;

        if (area === 'area1') {
            newImage = option1; // Replace with the image path for area 1
            selection(1);
        } else if (area === 'area2') {
            newImage = option2; // Replace with the image path for area 2
            selection(2);
        } else if (area === 'area3') {
            newImage = option3; // Replace with the image path for area 3
            selection(3);
        }

        setCurrentImage(newImage);
    };

    return (
        <div>
            <img
                src={currentImage}
                alt="Interactive"
                useMap={`#${imageMap}`}
                style={{ width: '100%', height: 'auto' }}
            />
            <map name={`${imageMap}`}>
                <area
                    target=""
                    alt="Area 1"
                    title="Area 1"
                    coords={area1coords}
                    shape="rect"
                    onClick={() => clickHandler('area1')} // Pass identifier to the handler
                />
                <area
                    target=""
                    alt="Area 2"
                    title="Area 2"
                    coords={area2coords}
                    shape="rect"
                    onClick={() => clickHandler('area2')}
                />
                <area
                    target=""
                    alt="Area 3"
                    title="Area 3"
                    coords={area3coords}
                    shape="rect"
                    onClick={() => clickHandler('area3')}
                />
            </map>
        </div>
    );
}

export default InteractiveImage;
