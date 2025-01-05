import React from "react";
import { cn, CommonsProps } from "@utils/utils";

interface WrapperTextSplitProps extends CommonsProps {
  isHead?: boolean;
  isLast?: boolean;
}

export function WrapperTextSplit({
  children,
  isHead = false,
  isLast = false,
}: WrapperTextSplitProps) {
  const renderText = () => {
    const parts = (children as string).split(/\*(.*?)\*/);
    return parts.map((part, index) =>
      part && index % 2 === 1 ? (
        <span key={index} className="strong">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <span className="split-wrapper">
      <span className={cn("split-line", { head: isHead }, { last: isLast })}>
        {renderText()}
      </span>
    </span>
  );
}
