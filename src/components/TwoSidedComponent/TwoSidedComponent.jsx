import image from "../../assets/image05.png";
import Button from "../Button/Button";
const TwoSidedComponent = () => {
  return (
    <div className="flex ml-[60px]  sm:mr-[15px]">
      {/* Left Side */}
      <div className="flex-1 p-4">
        <div className="text-2xl  mb-2 line-h-64 mb-[50px]">
          The Avero{" "}
          <p>
            Difference <span className="font-bold">embedded</span>
          </p>{" "}
          <span className="font-bold">finance engine</span>
        </div>
        <p className="text-gray-600 mb-4 mb-[50px]">
          Trusted experts who go the extra mile for customers{" "}
          <p>to provide turn-key solutions, complete system integration,</p> and
          comprehensive support.
        </p>
        <Button text="Learn More" />
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <img
          src={image}
          alt="Description"
          className="w-560 h-645 object-cover rounded-10"
        />
      </div>
    </div>
  );
};

export default TwoSidedComponent;
