import LinkButton from "@components/buttons/LinkButton";
import React from "react";

export default function NavBar() {
  return (
    <div className="hidden sm:flex flex-col items-center gap-[10px] px-14  pb-[80px] pt-[40px] md:flex-row md:justify-between md:pb-[34px]">
      <div className="flex flex-col items-center gap-[12px] md:flex-row">
        <h4 className="text-[14px] font-semibold text-third  ">
          NT3
        </h4>
      </div>
      <div className="flex gap-[15px] text-[14px]">
        <LinkButton title="GITHUB" href={'https://github.com/whosramoss/nt3'} />
      </div>
    </div>
  );
}
