import { ContentModel } from "@models/content-model";
import { Content } from "@ui/content";
import React from "react";

export default function ContentWrapper({
  id,
  component,
  content,
}: ContentModel) {
  const componentMap: Record<string, React.ElementType> = {
    "section-hero": Content.Hero,
    "section-motivation": Content.Motivation,
    "section-health": Content.Health,
    "section-footer": Content.Footer,
  };

  const Component = componentMap[component];

  return Component ? <Component key={id} {...content} /> : <React.Fragment />;
}
