import React from 'react';

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const currentRef = domRef.current; // Store the current value of domRef.current

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(currentRef);
      
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Use the stored currentRef in the cleanup function
            }
        };
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;
