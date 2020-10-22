import React from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";
// import { useState } from "react";

export default function StarRating({ totalStars = 5, selectedStars = 0, style = {}, onRate = f => f, ...props }) {
  // Stateless way
  return (
    <>
    {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onSelect={() => {
            console.log("click detected"); 
            onRate(i + 1)
          }}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )

  // Stateful way
  // const [selectedStars, setSelectedStars] = useState(0);

  // return (
  //   <div style={{ padding: "5px", ...style }} {...props}>
  //     {[...Array(totalStars)].map((n, i) => (
  //       <Star
  //         key={i}
  //         selected={i < selectedStars}
  //         onSelect={() => setSelectedStars(i + 1)}
  //       />
  //     ))}
  //     <p>
  //       {selectedStars} of {totalStars} stars
  //     </p>
  //   </div>
  // );
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
