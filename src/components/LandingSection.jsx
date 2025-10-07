import React, { useEffect, useRef, useState } from 'react';
import img1 from '../imgs/download.jpeg';
import img2 from '../imgs/istockphoto-1303030943-612x612.jpg';
import img3 from '../imgs/istockphoto-989428948-612x612.jpg';
import img4 from '../imgs/evgeni-tcherkasski-aV9UbHhJdrA-unsplash.jpg';

import styles from './LandingSection.module.css';


const defaultSlides = [
    { image: img4, title: 'Discover Nature', description: 'Experience breathtaking landscapes.' },
    { image: img2, title: 'Urban Adventures', description: 'Feel the pulse of the city life.' },
    { image: img3, title: 'Moments of Calm', description: 'Find serenity in stillness.' },
    { image: img1, title: 'Colors of Life', description: 'Vibrant scenes to inspire you.' }
];

const LandingSection = ({ slides = defaultSlides, intervalMs = 3000 }) => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isPaused) return;
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, intervalMs);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, slides.length, intervalMs]);

    return (
        <section className={styles.landing} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className={styles.slider}>
                {slides.map((s, i) => (
                    <div
                        key={i}
                        className={`${styles.slide} ${i === index ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${s.image})` }}
                        aria-hidden={i === index ? 'false' : 'true'}
                    >
                        <div className={styles.caption}>
                            {s.title && <h2 className={styles.title}>{s.title}</h2>}
                            {s.description && <p className={styles.desc}>{s.description}</p>}
                        </div>
                    </div>
                ))}

                <div className={styles.controls}>
                    <button
                        type="button"
                        className={styles.nav}
                        aria-label="Previous slide"
                        onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        className={styles.nav}
                        aria-label="Next slide"
                        onClick={() => setIndex((index + 1) % slides.length)}
                    >
                        ›
                    </button>
                </div>

                <div className={styles.dots}>
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingSection;