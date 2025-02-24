import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";

export default function Category() {
  let { c } = useParams();

  function getCategory() {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`
    );
  }
  let { data, isError, isPending, isLoading, error } = useQuery({
    queryKey: ["getCategory", c],
    queryFn: getCategory,
    select: (data) => data?.data.meals,
  });

  if (isLoading || isPending) return <Loader></Loader>;

  return (
    <>
      {data?.map(function (item) {
        return <Card item={item}></Card>;
      })}
    </>
  );
}
