import { useState, useEffect } from 'react';
import image1 from '../../assets/images/pasta.webp';
import image2 from '../../assets/images/health_toast.webp';
import image3 from '../../assets/images/app_recipebook.webp';
import image4 from '../../assets/images/oriental_food.webp';

const Carousel = () => {
    const images = [image1, image2, image3, image4];
    const [currentImage, setCurrentImage] = useState(0);
    const [intervalActive, setIntervalActive] = useState(true);

    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        setIntervalActive(false);
    };

    const handlePrev = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
        setIntervalActive(false);
    };

    const handleMouseEnter = () => {
        setIntervalActive(false);
    };

    const handleMouseLeave = () => {
        setIntervalActive(true);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (intervalActive) {
                setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
            }
        }, 15000);

        return () => clearInterval(interval);
    }, [images.length, intervalActive]);

    return (
        <div className="carousel relative flex items-center justify-center w-full max-w-4xl mx-auto">
            <button
                onClick={handlePrev}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="carousel-button absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-800 font-bold py-2 px-4 rounded-l z-10"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <img src={images[currentImage]} alt="Carousel Image" className="carousel-image rounded-lg w-full h-auto object-cover" />
            <button
                onClick={handleNext}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="carousel-button absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-800 font-bold py-2 px-4 rounded-r z-10"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
