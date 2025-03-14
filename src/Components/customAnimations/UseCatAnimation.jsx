import { useEffect, useRef } from 'react';

function UseCatAnimation(containerRef) {
     const isAnimated = useRef(false);
  useEffect(() => {
    // if (!containerRef.current) return;
     
    const skillLogos = containerRef.current.querySelectorAll('.skillLogos');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log(skillLogos);
                isAnimated.current = true;
                skillLogos.forEach((logo, index) => {
                    logo.classList.add(`originalPos${index + 1}`);
                });
                  
            }
            else {
                console.log(isAnimated.current);
                }
        
        });
      },
      { threshold: 1}
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [containerRef]);
}

export default UseCatAnimation;