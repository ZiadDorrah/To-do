import React, { useState, useEffect, useRef } from 'react';
import BlurText from "./ReactBits/BlurText";
import styles from './InfoSection.module.css';
import ScrollFloat from './ReactBits/ScrollFloat';
import RotatingText from './ReactBits/RotatingText';

import Card from './ReactBits/Card';
import img1 from '../imgs/download.jpeg';
import img2 from '../imgs/evgeni-tcherkasski-aV9UbHhJdrA-unsplash.jpg';
import img3 from '../imgs/istockphoto-1388405421-1024x1024.jpg';
import img4 from '../imgs/zoha-gohar-L8uRhNnkrM0-unsplash.jpg';

const InfoSection = () => {
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`${styles.infoSection} mt-5 mb-5`}>
            <div className="container ">
                <BlurText
                    text="What is SANAM ?!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className={`text-2xl mb-8 justify-content-center ${styles.gradientText}`}
                />
                <RotatingText />
                <div ref={sectionRef} className={`${styles.cards} ${isVisible ? styles.visible : ''} d-flex justify-content-center align-items-center gap-4`}>
                    <Card img={img1} title={text} />
                    <Card img={img2} title={text} />
                    <Card img={img3} title={text} />
                    <Card img={img4} title={text} />
                </div>
            </div>
        </div>
    );
};

export default InfoSection;