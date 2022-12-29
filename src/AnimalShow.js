import { useState } from "react";
import birdImage from "./svg/bird.svg";
import catImage from "./svg/cat.svg";
import cowImage from "./svg/cow.svg";
import dogImage from "./svg/dog.svg";
import gatorImage from "./svg/gator.svg";
import heartImage from "./svg/heart.svg";
import horseImage from "./svg/horse.svg";
import './AnimalShow.css'

const svgMap = {
  bird: birdImage,
  cat: catImage,
  cow: cowImage,
  dog: dogImage,
  gator: gatorImage,
  // heart: heartImage,
  horse: horseImage,
};

function AnimalShow(props) {
  const type = props.type;
  const [clicks, setClicks] = useState(0);

  const onClickHandler = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={onClickHandler}>
      <img className="animal" src={svgMap[type]} alt="animal" />
      <img
        className="heart"
        src={heartImage}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}

export default AnimalShow;
