import { useState } from "react";
import PropTypes from "prop-types";
import arrow from "../../assets/Arrow.png";

const ImageCard = ({ image, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg transition-all duration-300 transform-gpu hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt="Card"
        className="w-full h-auto filter brightness-90"
        style={{ filter: isHovered ? "brightness(1)" : "brightness(0.8)" }}
      />

      {/* Black overlay */}
      <div
        className={`absolute inset-0 bg-black opacity-60 ${
          isHovered ? "opacity-0" : ""
        } transition-opacity duration-2000`}
      />

      {/* Text bar */}
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-t-lg flex items-center justify-between">
          <span className="text-black">{text}</span>
          <div className="text-white cursor-pointer">
            <img src={arrow} />
            
          </div>
        </div>
      )}
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageCard;
