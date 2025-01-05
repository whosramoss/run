import React from "react";
import NavBar from "@app/_components/navbar";
import Body from "@app/_components/body";
import { WrapperText } from "@ui/wrapper-text";

export default function HomePage() {
  const link = { label: "HEALTH", scrollspy: "health" };
  return (
    <React.Fragment>
      <div className="cursor" id="cursor" />
      <WrapperText.Scroll>
        <NavBar brandName="RUN" timeFormat="00:00:00" navLink={link} />
        <Body />
      </WrapperText.Scroll>
    </React.Fragment>
  );
}
