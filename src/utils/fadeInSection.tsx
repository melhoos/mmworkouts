import React, { useState, useEffect, useRef } from 'react';
import '../styles/fadeInSection.scss';

type Props = {
  children: React.ReactNode;
};

function FadeInSection(props: Props): JSX.Element {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const current = domRef.current;
    if (!current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(current);
    return () => observer.unobserve(current);
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
