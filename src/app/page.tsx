import React from "react";
import NavBar from "@app/_components/navbar";
import Body from "@app/_components/body";
import { WrapperText } from "@ui/wrapper-text";
import Cursor from "@app/_components/cursor";
import PreLoader from "@app/_components/pre-loader";

export default function HomePage() {
  const link = { label: "HEALTH", scrollspy: "health" };
  const name = 'RUN';
  return (
    <React.Fragment>
      <PreLoader text={name} />
      <Cursor />
      <WrapperText.Scroll>
        <NavBar brandName={name} timeFormat="00:00:00" navLink={link} />
        <Body />
      </WrapperText.Scroll>
    </React.Fragment>
  );
}
