import { useEffect, useState } from "react";

export const Preloader = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`preloader ${isHidden ? "hidden" : ""}`}
      role="alert"
      aria-live="polite"
      aria-label="Page loading"
    >
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>Loading</h1>
    </div>
  );
};
