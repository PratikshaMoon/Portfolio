import React, {
  useState,
  useEffect,
} from "react";
import "./TypingComponent.css"; // Import your CSS file

const TypingComponent =
  () => {
    const phrases = [
      "Front End Developer",
      "MERN Stack Developer",
      "DevOps Engineer",
    ];
    const [
      currentPhraseIndex,
      setCurrentPhraseIndex,
    ] = useState(0);

    useEffect(() => {
      const interval =
        setInterval(() => {
          setCurrentPhraseIndex(
            (prevIndex) =>
              (prevIndex +
                1) %
              phrases.length
          );
        }, 6000); // Adjust interval here

      return () =>
        clearInterval(
          interval
        );
    }, [
      currentPhraseIndex,
      phrases.length,
    ]);

    return (
      <div className="typing-container">
        <h1>
          Hello, I'm <br />
          <span className="highlight-text">
            Pratiksha Moon
          </span>
          <br />
          and I thrive on
        </h1>
        <p className="typing-text fade">
          {
            phrases[
              currentPhraseIndex
            ]
          }
        </p>
      </div>
    );
  };

export default TypingComponent;
