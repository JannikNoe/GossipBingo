// LottieAnimation.jsx

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../src/images/lottiefieles/loading.json'; // Passe den Pfad zur Lottie-JSON-Datei an

const LottieLoader = () => {
    return (
        <div className="text-center w-20">
            <Lottie animationData={animationData} />
        </div>
    );
}

export default LottieLoader;