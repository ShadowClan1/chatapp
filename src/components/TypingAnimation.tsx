import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { keyframes } from '@emotion/react';

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkAnimation = keyframes`
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  cursorSpeed?: number;
  containerStyle?: React.CSSProperties;
  textVariant?: string;
  textComponent?: React.ElementType;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50,
  delay = 1000,
  cursorSpeed = 500,
  containerStyle,
  textVariant = 'body1',
  textComponent = 'span',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const typeText = (currentIndex: number) => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        timer = setTimeout(() => typeText(currentIndex + 1), speed);
      } else {
        setTimeout(() => setShowCursor(true), delay);
      }
    };

    typeText(0);

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed, delay]);

  return (
    <Box display="inline-block" style={containerStyle}>
      <Typography
        variant={textVariant}
        component={textComponent}
        css={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          animation: `${typingAnimation} ${text.length * speed}ms steps(${text.length})`,
        }}
      >
        {displayedText}
      {showCursor && (
        <span
          style={{
            display: 'inline-block',
            verticalAlign: 'center',
            animation: `${blinkAnimation} ${cursorSpeed}ms infinite`,
            marginLeft: '2px', // Adjust as needed
            width: '2px',
            height: '1em', // Adjust as needed
            backgroundColor: 'black',
          }}
        />
      )}
      </Typography>
    </Box>
  );
};

export default TypingAnimation;
