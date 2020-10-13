import React from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";

// This is a Component built from JSX
export default function StarRating({ totalStars = 5, stars = 3 }) {
  return [...Array(totalStars)].map((n, i) => (
    <Star key={i} selected={i < stars} />
  ));
}

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);
