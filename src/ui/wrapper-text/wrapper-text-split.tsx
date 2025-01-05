import React from "react";
import { cn, CommonsProps, WRAPPER_TEXT_SPLIT } from "@utils/utils";

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
        <span key={index} className="secondary">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <span className={cn(
      "overflow-hidden block leading-[1.2]",
      WRAPPER_TEXT_SPLIT,
    )}>
      <span className={cn(
        "inline-block text-[rgba(0,0,0,0.85)] relative translate-y-[150%] skew-y-3",
        "transition-transform duration-[0.85s] ease-[cubic-bezier(0.03,-0.11,0,0.98)]",
        "will-change-transform",
        { "head": isHead },
        { "last": isLast },
      )}>
        {renderText()}
      </span>
    </span>
  );
}
