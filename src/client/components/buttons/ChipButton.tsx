import React from "react";

type ChipButtonProps = {
  title: string;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ChipButton({
  title,
  onClick,
}: ChipButtonProps) {
  return (
    <button onClick={onClick}>
      <h4 className={"cursor-none rounded-full px-4 py-2 font-semibold text-third hover:text-secondary hover:bg-third"}>
        {title}
      </h4>
    </button>
  );
}
