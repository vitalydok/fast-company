import React from "react";

const renderPhrase = (number) => {
  let numberString = number.toString();
  let lastNumber = numberString.toString().slice(-1);
  // console.log("to string", numberString, typeof numberString);
  let phrase = "";
  if (
    (lastNumber == "2" && numberString != "12") ||
    (lastNumber == "3" && numberString != "13") ||
    (lastNumber == "4" && numberString != "14")
  ) {
    phrase = "человека тусанут с тобой сегодня";
    return (
      <span className="badge  m-4 bg-primary">
        <h2>
          {number} {phrase}
        </h2>
      </span>
    );
  } else if (number === 0) {
    phrase = "никто с тобой не тусанет";
    return (
      <span className="badge  m-4 bg-danger">
        <h2>{phrase}</h2>
      </span>
    );
  } else {
    phrase = "человек тусанет c тобой сегодня";
    return (
      <span className="badge  m-4 bg-primary">
        <h2>
          {number} {phrase}
        </h2>
      </span>
    );
  }
};
export default renderPhrase;
