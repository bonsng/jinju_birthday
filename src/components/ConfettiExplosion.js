// src/components/ConfettiExplosion.js
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ConfettiExplosion = () => {
    const [isExploding, setIsExploding] = useState(true);
    const { width, height } = useWindowSize();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExploding(false);
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isExploding && <Confetti width={width} height={height} />}
        </>
    );
};

export default ConfettiExplosion;
