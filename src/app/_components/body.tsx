"use client";

import { Content } from "@ui/content";
import { useApiFetchFromQuery } from "@hooks/useApiFetchFromQuery";
import { ContentApiResponseModel } from "@models/content-model";
import { WrapperText } from "@ui/wrapper-text";
import React from "react";

export default function Body() {
  const { data, isLoading, error } =
    useApiFetchFromQuery<ContentApiResponseModel>({
      url: "/api/run",
      key: "run",
    });

  if (error) {
    return (
      <h2 className="py-20 text-xl font-bold">
        <WrapperText.Split>Error</WrapperText.Split>
      </h2>
    );
  }

  if (isLoading) {
    return (
      <h2 className="py-20 text-xl font-bold">
        <WrapperText.Split>Loading</WrapperText.Split>
      </h2>
    );
  }

  return data?.data.map((value, index) => (
    <Content.Wrapper key={index} {...value} />
  ));
}
