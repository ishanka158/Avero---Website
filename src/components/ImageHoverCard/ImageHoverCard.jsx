/* eslint-disable react/prop-types */
import { useState } from "react";
import image1 from "../../assets/hoverimages/h1.png";
import image2 from "../../assets/hoverimages/h2.png";
import image3 from "../../assets/hoverimages/h3.png";
import image4 from "../../assets/hoverimages/h4.png";
import image5 from "../../assets/hoverimages/h5.png";
import image6 from "../../assets/hoverimages/h6.png";

const Row = ({ number, text, onHover }) => {
  return (
    <div
      className="p-4 border-b border-solid border-gray-300 cursor-pointer hover:border-black"
      onMouseEnter={() => onHover(number)}
    >
      <div className="flex items-center justify-between hover:font-semibold">
        <div className="w-6 h-6 text-black rounded-full flex items-center justify-center mr-2 pt-4 pb-4">
          {`0${number}`}
        </div>
        <div className=" ">{text}</div>
      </div>
    </div>
  );
};

const ImageHoverCard = () => {
  const [hoveredRow, setHoveredRow] = useState(1);

  const handleRowHover = (rowNumber) => {
    setHoveredRow(rowNumber);
  };

  const rowsData = [
    {
      number: 1,
      text: "Embedded Systems Development",
      image: image1,
      paragraph:
        "Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.",
    },
    {
      number: 2,
      text: "System Integration",
      image: image2,
      paragraph:
        "Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.",
    },
    {
      number: 3,
      text: "Test Automation",
      image: image3,
      paragraph:
        "Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.",
    },
    {
      number: 4,
      text: "Professional Services",
      image: image4,
      paragraph:
        "Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.",
    },
    {
      number: 5,
      text: "Application Development",
      image: image5,
      paragraph:
        "Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.",
    },
    {
      number: 6,
      text: "Verification and Validation",
      image: image6,
      paragraph:
        "Access to the right engineering staff and embedded control systems expertise to design and integrate your product correctly, the first time.",
    },
  ];

  return (
    <div className="relative flex flex-col md:flex-row ml-4 md:ml-8 lg:ml-16 xl:ml-24 mb-8 md:mb-16 lg:mb-24">
      <div className="md:absolute top-0 left-7 transform scale-150 sm:ml-[210px] md:ml-[50px]">
        Lorem ipsum{" "}
        <p>
          <span className="font-bold">connecter </span>Auctor
        </p>
      </div>

      {/* Left Section */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 md:mr-8 lg:mr-16 xl:mr-24 mt-4 md:mt-8 lg:mt-16 xl:mt-24">
        {rowsData.map((rowData) => (
          <Row
            key={rowData.number}
            number={rowData.number}
            text={rowData.text}
            onHover={handleRowHover}
          />
        ))}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 ml-4 md:ml-8 lg:ml-16 xl:ml-24">
        {hoveredRow !== null && (
          <div>
            {/* Display image and paragraph based on the hovered row */}
            <img
              src={rowsData[hoveredRow - 1].image}
              alt={`Image for Row ${hoveredRow}`}
              className="w-full md:w-auto"
            />
            <p className="pt-4 md:pt-8 lg:pt-16 xl:pt-16">
              {rowsData[hoveredRow - 1].paragraph}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageHoverCard;
