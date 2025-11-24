import { useEffect, useRef } from 'react';

const useOnePageScroll = () => {
    const isScrolling = useRef(false);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();

            if (isScrolling.current) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const sections = document.querySelectorAll('section');
            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;

            // Find the current section index based on scroll position
            let currentIndex = Math.round(currentScroll / windowHeight);

            // Calculate target index
            let targetIndex = currentIndex + direction;

            // Clamp target index
            if (targetIndex < 0) targetIndex = 0;
            if (targetIndex >= sections.length) targetIndex = sections.length - 1;

            if (targetIndex !== currentIndex) {
                isScrolling.current = true;

                window.scrollTo({
                    top: targetIndex * windowHeight,
                    behavior: 'smooth'
                });

                // Reset scrolling lock after animation
                setTimeout(() => {
                    isScrolling.current = false;
                }, 1000); // Adjust timeout based on scroll animation duration
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);
};

export default useOnePageScroll;
