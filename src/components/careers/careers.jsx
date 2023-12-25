import image1 from "../../assets/careers/image01.png";
import image2 from "../../assets/careers/image02.png";

import Button from "../Button/Button";
const Careers = () => {
  return (
    <div className="flex ml-[60px] mb-[60px]">
      {/* Left Side */}
      <div className="flex-1 p-4">
        <p>CARREERS</p>
        <div className="text-4xl  mb-2 line-h-64 mb-[50px] font-bold">
          Be a part of
          <p>our story</p>
        </div>
        <p className="text-gray-600 mb-4 mb-[50px]">
          At Avero, we're always looking for{" "}
          <p> creative problem solvers to join our team</p>
        </p>
        <Button text="Join Now" />
      </div>

      {/* Right Side */}
      <div className="flex mr-[150px]">
        <div className="mr-[50px]">
          <img
            src={image1}
            alt="Description"
            className="w-full md:w-200 h-577 object-cover rounded-10"
          />
        </div>
        <div className="">
          <img
            src={image2}
            alt="Description"
            className="w-full md:w-415 h-577 object-cover rounded-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
