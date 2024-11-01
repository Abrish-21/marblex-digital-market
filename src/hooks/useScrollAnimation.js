import { useEffect } from 'react';

function useScrollAnimation() {
  useEffect(() => {
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animation = entry.target.classList.contains('slide-in-left')
            ? 'animate-slideInLeft'
            : 'animate-slideInRight';
          entry.target.classList.add(animation);
          entry.target.classList.remove('opacity-0');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

export default useScrollAnimation;
