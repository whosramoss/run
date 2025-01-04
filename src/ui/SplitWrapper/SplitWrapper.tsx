import React from 'react';

interface SplitWrapperProps {
  text: string;
  isHead?: boolean;
  isLast?: boolean;
}

export function SplitWrapper({ text, isHead = false, isLast = false }: SplitWrapperProps) {
  const renderText = () => {
    const parts = text.split(/\*(.*?)\*/);
    return parts.map((part, index) =>
      part && index % 2 === 1 ? (
        <span key={index} className="strong">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <span className="split-wrapper">
      <span className={`split-line ${isHead ? 'head' : ''} ${isLast ? 'last' : ''}`}>
        {renderText()}
      </span>
    </span>
  );
};

