"use client";

import React from "react";
import Card, { CardSkeleton } from "@components/Card";
import Center from "@components/Center";
import { useApiFetch } from "@hooks/useApiFetch";
import { TGeometry } from "@schemas/GeometrySchema";
import Grid from "@components/Grid";

export default function GeometryList() {

  const { data, isLoading, error } = useApiFetch<TGeometry[]>({
    url: "/api/geometry",
  });


  if (error) {
    return <Center><h2>Sorry, we were unable to fetch the list of geometric shapes.</h2> </Center>
  }

  if (isLoading) {
    return (
      <Grid>{Array(6).fill(0).map((_, index) => <CardSkeleton key={index} />)}</Grid>
    )
  }

  return (
    <Grid>{data?.data.map((value, index) => <Card key={index} value={value} />)}</Grid>
  )
}