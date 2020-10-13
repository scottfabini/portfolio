import React from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(3);

  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}

// Below is all using props, versus above using state/hooks
// This is a Component built from JSX
// export default function StarRating({ totalStars = 5, stars = 3 }) {
//   return [...Array(totalStars)].map((n, i) => (
//     <Star key={i} selected={i < stars} />
//   ));
// }

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
